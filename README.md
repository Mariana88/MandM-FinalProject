# MandM-FinalProject

# General Description

# Project Goals

# Install Instructions

# How to use this app

# Users and User Stories

## Users
* Organization
* Member of organization (aka Org Member)
* Private users

## User Stories

### Organization stories
As an Organization I can:
* 1 Create my account
* 2 Login into my account
* 3 Update the Organization's information information
* 4 Invite team member
* Accept team members
* Post ways the organization needs help
  * post needs of volunteers
  * post donation needs
  * mention/tag other organizations or usersor skills which might be related to the post (@mention and/or hashtags)
* Update the organization posts
* Delete organization posts
* Search for help posts (offered or needed)
 * See the info or way to contact them
* Indicate misuse of entity's personal information
 * Associated with other "organizations" in the system
 * associated with other users
 * associated with a post

### Org Members stories
As an Org Member I can:
* Create an account
* Associate myself to an Organization as a team member
* Login into my account
* Update my personal information
* Post ways the organization needs help
  * post needs of volunteers
  * post donation needs
  * mention/tag other organizations or usersor skills which might be related to the post (@mention and/or hashtags)
* Update the organization posts
* Delete organization posts
* Post ways I can help:
 * post ways I can volunteer
 * post things I want to donate
 * mention/tag other organizations or usersor skills which might be related to the post (@mention and/or hashtags)
* Update my personal posts
* Delete my personal posts
* Search for help posts (offered or needed)
 * See the info or way to contact them
* Indicate improper use of my account
* Indicate some impropriety of another account (organization or user)
* Indicate some impropriety of a post


### Private Users stories
As a private users I can:
* Create an account
* Login into my account
* Update my personal information
* Post ways I can help:
 * post ways I can volunteer
 * post things I want to donate
* Update my posts
* Delete my posts
* Mark a post as completed (aka "not available" for items)
 * Mark a given item as completed /no longer available
* Search for help posts (offered or needed)
 * See the info or way to contact them
* Indicate improper use of my account
* Indicate some impropriety of another account (organization or user)
* Indicate some impropriety of a post
 
 # Requirements
 
 Req ID | Overall Functionality | Description | Acceptance Criteria | Addressed Stories | Target Version
 --- | --- | --- | --- | --- | ---
 1 | User management | | | | |
  --- | --- | --- | --- | --- | ---
  1.1 | | Add user (first name, last name, email, nickname, social media profiles (0-n), phone, location(city) | | |
  1.1.1 | Add user | Select user type (person or organization) | | | 
  1.1.2 | Add user | Add first name | | |
  1.1.2 | Add user | Add profile description (aka "about me")| | |
  1.1 | | Add user (first name, last name, email, nickname, social media profiles (0-n), phone, location(city) | | | 
  1.1 | | Add user (first name, last name, email, nickname, social media profiles (0-n), phone, location(city) | | | 
  1.1 | | Add user (first name, last name, email, nickname, social media profiles (0-n), phone, location(city) | | |  
  1.2 | | Update user | | | 
  1.3 | | Delete user | | |
   |  |  |  |  |
  2 | Org Teams | | | |
  --- | --- | --- | --- | --- | ---
  2.1 | Org Teams | Add organization to user (1-n - either user or organization can add) | | | 
  2.2 | Org Teams | Aprove/Reject team member association (user or organization) | | | 
  2.3 | Org Teams | Invite team member| |4 | |
  2.4 | Org Teams | Remove member from team(organization or user) | | |
   |  |  |  |  |
  3 | Posting | | | | 
  --- | --- | --- | --- | --- | ---
  3.1 | Posting | Add Post| | | 
  3.1.1 | Add Post | Select post type (offered or needed) | | | 
  3.1.2 | Add Post | Select post category (donation or volunteering) | | | 
  3.1.3 | Add Post | Add an item | | | 
  3.1.3.1 | Add Post | Add item name (i.e. name of object or type of work ("skill")(short string of max X characters)) | | | 
  3.1.3.2| Add Post | Add an item description | | | 
  3.1.3.3| Add Post | Add an item quantity | | | 
  3.1.4 | Add Post | Add a post location | | | 
  3.1.5 | Add Post | Add a post timeframe| | | 
  3.1.6 | Add Post | Add an organization to the post (i.e. not as mention but really belonging to the organization | | | 
  3.2 | Posting | Delete Post | | |
  3.2.1 | Delete Post | Delete my personal Post (any user)| | | 
  3.2.2 | Delete Post | Delete organization Post (the organization)| | | 
  3.3 | Posting | Update Post| | |
  3.3.1 | Update Post | Update my personal Post (any user)| | | 
  3.3.2 | Delete Post | Update organization Post (team members)| | |
  3.3.3 | Update Post | Delete item | | | 
  3.3.4 | Update Post | Update item (everything for now) | | | 
  3.3.4.1 | Update Post | Update item as 'completed/no longer available'| | | 
  3.3.5 | Update Post | Add extra item | | | 
  3.3.6 | Update Post | Delete item | | | 
  3.3.7 | Update Post | Update location | | | 
  3.3.8 | Update Post | Update timeframe | | | 
  3.3.9 | Update Post | Mark post as 'completed/no longer available'| | | 
  4 | Searching | | | | 
  5 | Sharing | | | | 



