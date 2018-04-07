# prompt-editor

> Editor to customize bash prompt

## Blah
Wow there's a lot to take in but OK. Basically, the simplest thing you can do right now is mapping the draggable to terminal. For example, if "host" is picked, then:
- it appears in the terminal
- we also have the bash script

Ok, that's it first

Basically what we'll need is,

basic: [{ name: 'host',
        bash: blahblah what is the code for host in bash },
        {
            name: 'blah'
            bash: 'blehkbfkj'
            output: host <--- ini yg nanti muncul di terminal for example.
        }],
status: [{ name: 'username',
        bash: blahblah what is the code for host in bash },
        {
            name: 'blah'
            bash: 'blehkbfkj',
            output: user <---- yg nanti muncul
        }],

Ok I think we're gonna need an additional Vue component.
This Vue component will basically gather all selected draggables,
and concat them somehow into one store.
So we have another Store (like sdras' SelectedFilter) but this one's,
say, bash terminal.
THis bash terminal is a Vue Component that lives inside 
the StaticTerminal:)
Which function is concat the selected draggables,
Iterate in selectedlist -------------------> mutate bash terminal according
to selected draggables


We can also have colors too.. because users will be able to choose the colors.

colors: [
    {
        name: red,
        hex: blah,
        ansi: blahblah
    }, {
        name: cyan,
        hex: blah,
        ansi: blahblah
    }
]


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
