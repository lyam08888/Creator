# Code Citations

## License: unknown
https://github.com/SebastianMaciel/twitch-todo-list/blob/add44cc370a45b042a1ac21434554b3251d0e392/src/components/SettingsModal/index.tsx

```
null, 2);
                const dataBlob = new Blob([dataStr], { type: 'application/json' });
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link
```


## License: unknown
https://github.com/SebastianMaciel/twitch-todo-list/blob/add44cc370a45b042a1ac21434554b3251d0e392/src/components/SettingsModal/index.tsx

```
null, 2);
            const dataBlob = new Blob([dataStr], {type:'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link
```


## License: unknown
https://github.com/ettleman/ettleman/blob/59ad6129862fa2088ca0284a08971e7a32797e1e/konva/script.js

```
) {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{
                        role: 'user',
                        content: prompt
```


## License: unknown
https://github.com/tylerhuffaker/tylerhuffaker.github.io/blob/1016bb4e5bc41b543f0f68e4e7d35b016a2dd972/script.js

```
) {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{
                        role: 'user',
                        content: prompt
```


## License: unknown
https://github.com/mkmuduli/chat-gpt-demo/blob/8adc31bed8bed11de14044c7455d8cb5d96fb96f/src/utils/chatComplition.js

```
) {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{
                        role: 'user',
                        content: prompt
```


## License: unknown
https://github.com/leemonade/leemons/blob/1bc74ee0210204ad9e07e1dc0eef29243612d996/packages/leemons-plugin-users/frontend/src/pages/private/users/DetailUser/UserImageAndPreferredGender.js

```
) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if
```

