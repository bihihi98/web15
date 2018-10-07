const axios=require('axios');
const fs = require('fs');

axios.get("https://btvn-web15s.herokuapp.com/api/web10")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web10.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

      axios.get("https://btvn-web15s.herokuapp.com/api/web11")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web11.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

      axios.get("https://btvn-web15s.herokuapp.com/api/web12")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web12.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

      axios.get("https://btvn-web15s.herokuapp.com/api/web13")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web13.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

      axios.get("https://btvn-web15s.herokuapp.com/api/web14")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web14.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });

      axios.get("https://btvn-web15s.herokuapp.com/api/web15")
      .then(res => {
          console.log(JSON.stringify(res.data))
           fs.writeFileSync("web15.js", JSON.stringify(res.data), (err) => {
                 console.log("Error in getting data!");
           });
      })
      .catch(err => {
        console.log(err);
      });
