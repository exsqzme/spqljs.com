---
id: "list-services"
title: "List"
---

Connecting to a SharePoint List

```javascript
import spql from 'spql'

const SPSite = spql.connect(siteUrl)
const SPList = SPSite.List(listName|listGUID)
```

## getSchema

```javascript
SPList.getSchema()
// => {Promise,<Object>} The List Info {id, name, sitUrl, description, createdBy, created, modified, itemCount, defaultViewUrl, isDocumentList, isHidden}
// and Field Info {displayName, staticName, description, type, isHidden, isReadOnly, isFormBaseType, ?[choice], ?{lookup}}
```

## count

```javascript
SPList.count(?where)
// => {Promise,<number>} The amount of records
```

**where**

CAML (e.g. <Eq><FieldRef Name="staticName" /><Value Type="fieldType">{value}</Value></Eq>) *spql.Caml


## all

```javascript
SPList.all({
  select,
  orderBy,
  maxResults
})
// => {Promise,<Array>} Record results {name: value}
```

**select**

Field|[Field]

**Field**

fieldName|{staticName, alias, type, mapFn}

**orderBy**

OrderByField|[OrderByField]

**OrderByField**

fieldName|{staticName, isAscending}

**maxResults**

Limit amount of returned records

## find

```javascript
SPList.find({
  select,
  where,
  orderBy,
  maxResults
})
// => {Promise,<Array>} Record results {name: value}
```

**select**

Field|[Field]

**Field**

fieldName|{staticName, alias, type, mapFn}

**where**

CAML (e.g. <Eq><FieldRef Name="staticName" /><Value Type="fieldType">{value}</Value></Eq>) *spql.Caml

**orderBy**

OrderByField|[OrderByField]

**OrderByField**

fieldName|{staticName, isAscending}

**maxResults**

Limit amount of returned records

## findOne

```javascript
SPList.findOne({
  select,
  where
})
// => {Promise,<?Object>} Record result {name: value}
```

**select**

Field|[Field]

**Field**

fieldName|{staticName, alias, type, mapFn}

**where**

CAML (e.g. <Eq><FieldRef Name="staticName" /><Value Type="fieldType">{value}</Value></Eq>) **spql.Caml

## findById

```javascript
SPList.findById({
  id,
  select
})
// => {Promise,<?Object>} Record result {name: value}
```

**select**

Field|[Field]

**Field**

fieldName|{staticName, alias, type, mapFn}

## create

```javascript
SPList.create(NewItem|[NewItems])
// => {Promise,<Array|Object>} Results {id, isSuccess, error}
```

**NewItem**

{staticName: value}

## updateById

```javascript
SPList.updateById(id, Updates)
// => {Promise,<Object>} Results {id, isSuccess, error}
```

**Updates**

{staticName: value}

## deleteById

```javascript
SPList.deleteById(id)
// => {Promise,<Object>} Results {id, isSuccess, error}
```