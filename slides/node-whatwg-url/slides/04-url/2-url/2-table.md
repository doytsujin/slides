## table

```
            ┌─────────────────────────────────────────────────────────────────────────────────────────┐
URL Object  │                                          href                                           │
            ├──────────┬──┬─────────────────────┬─────────────────┬───────────────────────────┬───────┤
            │ protocol │  │        auth         │      host       │           path            │ hash  │
            │          │  │                     ├──────────┬──────┼──────────┬────────────────┤       │
            │          │  │                     │ hostname │ port │ pathname │     search     │       │
            │          │  │                     │          │      │          ├─┬──────────────┤       │
            │          │  │                     │          │      │          │ │    query     │       │
────────────"  http:    //    user   :   pass   @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
            │          │  │          │          │ hostname │ port │          │                │       │
WHATWG URL  │          │  │          │          ├──────────┴──────┤          │                │       │
            │ protocol │  │ username │ password │      host       │          │                │       │
            ├──────────┴──┼──────────┴──────────┼─────────────────┤          │                │       │
            │   origin    │                     │     origin      │ pathname │     search     │ hash  │
            ├─────────────┴─────────────────────┴─────────────────┴──────────┴────────────────┴───────┤
            │                                          href                                           │
            └─────────────────────────────────────────────────────────────────────────────────────────┘
```

WHATWG URL's origin property includes protocol and host,  
but not username or password.
