function searchNames( logins ){
    return logins.filter(login => login[0].endsWith('_'))
}


console.log(searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]))