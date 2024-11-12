import { gql } from "@apollo/client";

export const GET_STARS = gql`
    query GetStars($username: String!) {
        user(login: $username) {
            bio
            avatarUrl
            login
            location 
            email
            url
            starredRepositories {
                edges {
                    node {
                        name
                        url
                        description
                    }
                }
            }
        }
    }
`