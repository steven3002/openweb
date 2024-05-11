use std::collections::HashMap;

use near_sdk::{env, near, near_bindgen, AccountId, Timestamp}; // Keep track of voters and votes

// Add serialization formats for Borsh and JSON
#[near(serializers = [borsh, json])]
#[derive(Clone)]
pub struct VotingItem {
    pub id: u8,
    pub name: String,
    pub votes: HashMap<AccountId, Timestamp>, // Track voters and timestamps
}

// Define the contract structure
#[near(contract_state)]
pub struct Contract {
    owner: AccountId,
    voting_items: Vec<VotingItem>,
    end_time: Timestamp,
}

// Implement the default trait for the Contract struct
impl Default for Contract {
    fn default() -> Self {
        Self {
            owner: env::current_account_id(),
            voting_items: vec![
                VotingItem {
                    id: 1,
                    name: "Item 1".to_string(),
                    votes: HashMap::new(),
                },
                VotingItem {
                    id: 2,
                    name: "Item 2".to_string(),
                    votes: HashMap::new(),
                },
                VotingItem {
                    id: 3,
                    name: "Item 3".to_string(),
                    votes: HashMap::new(),
                },
            ],
            end_time: env::block_timestamp() + 3600 * 1000 * 1000 * 24, // Set end time 24 hours from now (adjust as needed)
        }
    }
}

// Implement the Contract structure
#[near_bindgen]
impl Contract {
    // Initialize method for creating a new instance of the Contract
    #[init]
    pub fn new(owner: AccountId) -> Self {
        Self {
            owner,
            ..Contract::default()
        } // Use default values for other fields
    }

    // Method to vote for a specific item
    pub fn vote(&mut self, item_id: u8) {
        let account_id = env::predecessor_account_id();
        let voting_item = self.voting_items.iter_mut().find(|item| item.id == item_id);

        // Check if item ID is valid and voting time is not over
        if voting_item.is_none() || env::block_timestamp() >= self.end_time {
            return;
        }

        // Check if user has already voted for this item
        let item = voting_item.unwrap();
        if item.votes.contains_key(&account_id) {
            return;
        }

        // Add vote and timestamp for the user
        item.votes.insert(account_id, env::block_timestamp());
        env::log_str(&format!("Vote submitted for item {}", item_id));
    }

    // Method to retrieve a list of all voting items
    pub fn list_voting_items(&self) -> Vec<VotingItem> {
        self.voting_items.clone() // Return a copy to avoid mutability issues
    }

    // Method to get the total number of votes for a specific item
    pub fn get_total_votes(&self, item_id: u8) -> usize {
        self.voting_items
            .iter()
            .find(|item| item.id == item_id)
            .map(|item| item.votes.len())
            .unwrap_or(0)
    }
}

// Unit tests (optional, replace with your own tests)
#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::VMContextBuilder;
    use near_sdk::testing_env;

    // ... (similar test structure as before)
}
