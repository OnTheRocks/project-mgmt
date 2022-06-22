import { gql } from "@apollo/client";

const ADD_PROJECT = gql`
  mutation AddProject($name: String!, $description: String!, $status: ProjectStatus! $clientID: ID!) {
    addProject(name: $name, description: $description, status: $Status, clientID: $clientID) {
      id
      name
      description
      status
      client{
        id
        name
        email 
        phone
      }
    }
  }
`;