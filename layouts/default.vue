<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 22px;
  font-weight: 300;
  color: #4f4f4f;
  box-sizing: border-box;
}
h1,
h2,
h3,
h4 {
  font-weight: 300;
  color: #000;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button {
  display: inline-block;
  border-radius: 5px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50px;
  border: none;
  min-width: 100px;
}
.button.yes {
  background-color: #27ae60;
  flex-grow: 1;
  margin-left: 5px;
}
.button.no {
  background-color: #eb5757;
  margin-right: 5px;
}
.button:hover {
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.card {
  width: 100%;
  min-height: 300px;
  max-width: 300px;
  height: auto;
  background: #fff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.header-img {
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 250px;
  background-position: center center;
}

.content {
  padding: 20px;
  text-align: left;
}
.card .action {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
</style>
