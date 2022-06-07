# CALEB AND BROWN CODING CHALLENGE 

- [caleb-and-brown-challenge.vercel.app   ](caleb-and-brown-challenge.vercel.app) 


### Use Locally 

* clone repo
* npm install 
* npm run dev 
* npm run test           for tests. 

### Challenge Targets

| Task                           | Completed           | Evidence  |
| ----------------------------- |:---------------      | ------------------:|
| Pagnated List of Currencys           | True          | [Pagnated List of Currencys  ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/pages/index.js)                    |
| Detailed Cyrpto Page                 | True         |  [Detailed Cyrpto Page   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/pages/detailed/%5Bid%5D.js)                                |
| Filter Cyrptos name/sym              | True         |  [Filter   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/components/UI/SearchBar.js)                   |  
| Provide Loading State                | True         |  [Loading State   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/pages/index.js)                   |   
| Error Is data call fails             | True          |   [Error State   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/pages/index.js)                            |   
| Unit test                            | True          |      [Testing   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/tree/main/tests)               |   
| Trending Page or Tab                 | True          |     [Volume Trending   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/components/Tables/VolumeTrendingTable.js)                                |                     |   
| Showcase creativity                  | True          | [Site Wide   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge)           |   
| Global Market Data                   | False          | [Global Defi Data   ](https://github.com/Keoooo/Caleb-and-Brown-Challenge/blob/main/components/Tables/GlobalMarketTable.js)                     |   





## Thought Process 


### Why I used getStaticProps 

```javascript
export const getStaticProps = async () => {
};
```

To utilize next js data fetching features for the data to be fetched at build time. I also fetch data using vanilla react to demonstrate diffrent methods of fetching data.




### Why I used Dynamic Page 

```javascript
[id].js 
```
So each coin in the list can be clicked and you can acsess a more detailed market page. Each detailed page will be pushed to /detailed/[coinid]  

### Learnings. 

*  I Should write my test immediately after finished component for time efficiency and making them more practical at finding errors early.
*  The challenge prefered typescript which I haven't had much exposure to. But since being assigned the assignment I have been studying typescript. 
  

 
### Test Report. 

 <img width="688" alt="Screenshot 2022-06-07 at 18 22 48" src="https://user-images.githubusercontent.com/33136365/172333251-4f75905f-6a13-4364-9a5f-072b6cac9acf.png">
 
 ###  npms used 

* Jest
* Tailwind
* reacticons 
* NpProgress 


## Tech Used 
<img align="left" alt="Visual Studio Code" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" style="padding-right:10px;" />
<img align="left" alt="HTML5" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />
<img align="left" alt="CSS3" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />
<img align="left" alt="Tailwind" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" style="padding-right:10px;" />
<img align="left" alt="JavaScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="padding-right:10px;" />
<img align="left" alt="NextJs" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="padding-right:10px;" />
<img align="left" alt="React" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />
<img align="left" alt="GitHub" width="26px" src="https://user-images.githubusercontent.com/3369400/139447912-e0f43f33-6d9f-45f8-be46-2df5bbc91289.png" style="padding-right:10px;" />
 


### SITE SNAPSHOT
<img width="1425" alt="Screenshot 2022-06-07 at 18 30 36" src="https://user-images.githubusercontent.com/33136365/172334713-f1d4e4be-6186-4b92-8058-9ecd18c92465.png">
<img width="1433" alt="Screenshot 2022-06-07 at 18 30 52" src="https://user-images.githubusercontent.com/33136365/172334724-7df91da6-33bd-4e84-ab42-acb07772d904.png">
<img width="1428" alt="Screenshot 2022-06-07 at 18 31 05" src="https://user-images.githubusercontent.com/33136365/172334739-6043a664-3439-481f-a7c4-5b294a5cffb4.png">
<img width="1200" alt="Screenshot 2022-06-07 at 18 31 14" src="https://user-images.githubusercontent.com/33136365/172334750-53f1b59c-724e-48b1-adb7-da9b8c06cbbf.png">






<br />
<br />
 
<br />
