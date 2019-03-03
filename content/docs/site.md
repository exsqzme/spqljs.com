---
id: "site-services"
title: "Site"
---

Connecting to a SharePoint Site

```javascript
import spql from 'spql'

const SPSite = spql.connect('/')
```

## getListCollectionInfo()

```javascript
SPSite.getListCollectionInfo()
// => {Promise,<Array>} The Site's List Info {id, name, siteUrl, description, createdBy, created, modified, itemCount, defaultViewUrl, isDocumentList, isHidden}
```

## uploadDocument()

```javascript
SPSite.uploadDocument({
  fileStream: [Bytes],
  fileName: String,
  destination: String,
  fields: [Field]
})
// => {Promise,<Object>} Results {isSuccess, error}
```

Uploads a document to a document libary under the site.

**Field**

{displayName, staticName, type, value}

## getUserById()

```javascript
SPSite.getUserById(UserID)
// => {Promise,<?Object>} The User {id, account, displayName, email}
```

## getCurrentUser()

```javascript
SPSite.getCurrentUser()
// => {Promise,<?Object>} The Current User {id, account, displayName, email}
```

## getGroupsFromUser()

```javascript
SPSite.getGroupsFromUser(userLoginName)
// => {Promise,<Array>} The User's Groups {id, name, description}
```

## getUsersInGroup()

```javascript
SPSite.getUsersInGroup(groupName)
// => {Promise,<Array>} The Users in Group {id, account, displayName, email}
```

## createGroup()

```javascript
SPSite.createGroup({
  name,
  description,
  ownerLoginName,
  ownerIsGroup,
  defaultUserLoginName
})
// => {Promise,<Object>} Results {isSuccess, error}
```

## deleteGroup()

```javascript
SPSite.deleteGroup(groupName)
// => {Promise,<Object>} Results {isSuccess, error}
```

## addUsersToGroup()

```javascript
SPSite.addUserToGroup(groupName, userLoginName|[userLoginName])
// => {Promise,<Object>} Results {isSuccess, error}
```

## deleteUsersFromGroup()

```javascript
SPSite.deleteUserFromGroup(groupName, userLoginName|[userLoginName])
// => {Promise,<Object>} Results {isSuccess, error}
```

## isUserInGroup()

```javascript
SPSite.isUserInGroup(userId, groupId|[groupId])
// => {Promise,<boolean>}
```

## isCurrentUserInGroup()

```javascript
SPSite.isCurrentUserInGroup(groupId|[groupId])
// => {Promise,<boolean>}
```