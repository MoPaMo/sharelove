# sharelove

sharelove enables you to  share your favorite songs on spotify in a public playlist



## Details

### .env
Values
* process.env.clientId,
* process.env.clientSecret
* process.env.callbackURL (full callback URL, e. g. `https://example.com/cb`)
* process.env.cb (callback handler on server side, e. g. `/cb` )


### SQL
```sql
CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, refreshkey TEXT, key TEXT, keyrefreshed INT, playlist TEXT, userid TEXT, lastrefreshed INT);
```
