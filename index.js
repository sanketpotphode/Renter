var db = require('./configs/config.database.js');
const express = require('express');
var cors = require('cors');
const app = express();
const {
  PORT_NO
} = require('./configs/config.constats.js');
// const port = 6500;

app.use(express.json());
app.use(cors());


//------------------------------------------------------ API's For Customers starts -----------------------------------------

// API to insert customer deatils
db.connect(function (err) {

  // ///inser record by hard fode
  // var insertSql = "INSERT INTO `customer_deatils`( `customer_id`, `f_name`, `m_name`, `l_name`, `full_name`, `mobile_no`, `alternate_mobile_no`, `email_id`, `gender`, `date_of_birth`, `address`, `city`, `state`, `country`, `blood_group`, `profession`, `membership_type_id`, `room_or_flat_id`, `bed_id`, `manager_id`, `aadhar_no`, `pan_no`, `voter_id`, `identity_document_path`, `date_of_joining`, `rent_pay_plan_date`, `date_of_leaving`, `added_on`, `added_by`, `updated_on`, `updated_by`, `deleted`, `status`) VALUES ( 'CU-1','sanket','subhash','potphode','ssp','7887746393','7887709454','sanketpotphode09@gmailcom','male','','24-04-2000','Viman Nagar','Pune','Mahrashtra','India','B+','Software Developer','1','201','1','1','619074621881','FRGPP2593P','787363920912','doc1.pdf','01-01-2022','01','','','','','',1)";

  // db.query(insertSql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  //   console.log(result);
  //   });


  // sample app call 
  app.get('/', (req, res) => res.send('<center><h2>Welcome to rental management software.</h2></center>'));
  console.log("wecome to rental management software...");

  // API to get all customers details
  app.get('/customers', function (req, res) {
    db.query('SELECT * FROM `customer_deatils` where status = 1', function (error, results, fields) {
      if (error) throw error;
      res.header("Access-Control-Allow-Origin", "*");
      return res.send(results);
    });
  });


  // API to get customer details by customer id
  app.get('/customer/:id', function (req, res) {
    let customer_id = req.params.id;
    if (!customer_id) {
      return res.status(400).send({ error: true, message: 'Please provide user_id' });
    }
    db.query('SELECT * FROM `customer_deatils` where status = 1 AND id=?', customer_id, function (error, results, fields) {
      if (error) throw error;
      // return res.send({ error: false, data: results[0], message: 'Customer not found.' });
      res.header("Access-Control-Allow-Origin", "*");
      return res.send(results);
    });
  });


  // API for add new customer details  
  app.post('/addCustomer', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    let customer_id = req.body.customer_id;
    let f_name = req.body.f_name;
    let m_name = req.body.m_name;
    let l_name = req.body.l_name;;
    let full_name = f_name+" "+m_name+(m_name != "" || m_name !== NULL)?" ":""+l_name;
    let mobile_no = req.body.mobile_no;
    let alternate_mobile_no = req.body.alternate_mobile_no;
    let email_id = req.body.email_id;
    let gender = req.body.gender;
    let date_of_birth = req.body.date_of_birth;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let blood_group = req.body.blood_group;
    let profession = req.body.profession;
    let membership_type_id = req.body.membership_type_id;
    let room_or_flat_id = req.body.room_or_flat_id;
    let bed_id = req.body.bed_id;
    let manager_id = req.body.manager_id;
    let aadhar_no = req.body.aadhar_no;
    let pan_no = req.body.pan_no;
    let voter_id = req.body.voter_id
    let identity_document_path = req.body.identity_document_path;
    let date_of_joining = req.body.date_of_joining;
    let rent_pay_plan_date = req.body.rent_pay_plan_date;
    let date_of_leaving = req.body.date_of_leaving;
    let added_on = req.body.added_on;
    let added_by = req.body.added_by;
    let updated_on = req.body.updated_on;
    let updated_by = req.body.updated_by;
    let deleted = 0;
    let status = 1;

    if (!f_name && !email && !mobile && !l_name) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Content-Type", "application/json");
      return res.status(400).send({ error: true, message: 'Please provide user' });
    }
    db.query("INSERT INTO `customer_deatils` SET ? ", { customer_id: customer_id, f_name: f_name, m_name: m_name, l_name: l_name, full_name: full_name, mobile_no: mobile_no, alternate_mobile_no: alternate_mobile_no, email_id: email_id, gender: gender, date_of_birth: date_of_birth, address: address, city: city, state: state, country: country, blood_group: blood_group, profession: profession, membership_type_id: membership_type_id, room_or_flat_id: room_or_flat_id, bed_id: bed_id, manager_id: manager_id, aadhar_no: aadhar_no, pan_no: pan_no, voter_id: voter_id, identity_document_path: identity_document_path, date_of_joining: date_of_joining, rent_pay_plan_date: rent_pay_plan_date, date_of_leaving: date_of_leaving, added_on: added_on, added_by: added_by, updated_on: updated_on, updated_by: updated_by, deleted: deleted, status: status }, function (error, results, fields) {
      if (error) throw error;
      res.header("Content-Type", "application/json");
      res.header("Access-Control-Allow-Origin", "*");
      return res.send({ error: false, data: results, message: 'New customer has been created successfully.' });
    });
  });


  // API for updating customer details
  app.put('/updateCustomer/:customer_id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");

    let customer_id = req.params.customer_id;
    let f_name = req.body.f_name;
    let m_name = req.body.m_name;
    let l_name = req.body.l_name;
    let full_name = req.body.full_name;
    let mobile_no = req.body.mobile_no;
    let alternate_mobile_no = req.body.alternate_mobile_no;
    let email_id = req.body.email_id;
    let gender = req.body.gender;
    let date_of_birth = req.body.date_of_birth;
    let address = req.body.address;
    let city = req.body.city;
    let state = req.body.state;
    let country = req.body.country;
    let blood_group = req.body.blood_group;
    let profession = req.body.profession;
    let membership_type_id = req.body.membership_type_id;
    let room_or_flat_id = req.body.room_or_flat_id;
    let bed_id = req.body.bed_id;
    let manager_id = req.body.manager_id;
    let aadhar_no = req.body.aadhar_no;
    let pan_no = req.body.pan_no;
    let voter_id = req.body.voter_id;
    let identity_document_path = req.body.identity_document_path;
    let date_of_joining = req.body.date_of_joining;
    let rent_pay_plan_date = req.body.rent_pay_plan_date;
    let date_of_leaving = req.body.date_of_leaving;
    let updated_on = req.body.updated_on;
    let updated_by = req.body.updated_by;

    if (!customer_id) {
      res.header("Content-Type", "application/json");
      return res.status(400).send({ error: true, message: 'Please provide customer_id' });
    }

    // Assuming `db` is your database connection instance
    db.query("UPDATE `customer_deatils` SET ? WHERE customer_id = ?", [{ f_name, m_name, l_name, full_name, mobile_no, alternate_mobile_no, email_id, gender, date_of_birth, address, city, state, country, blood_group, profession, membership_type_id, room_or_flat_id, bed_id, manager_id, aadhar_no, pan_no, voter_id, identity_document_path, date_of_joining, rent_pay_plan_date, date_of_leaving, updated_on, updated_by }, customer_id], function (error, results, fields) {
      if (error) throw error;
      res.header("Content-Type", "application/json");
      res.header("Access-Control-Allow-Origin", "*");
      return res.send({ error: false, data: results, message: 'Customer details have been updated successfully.' });
    });
  });



  //  Delete customers by update status
  app.put('/deleteCandidate', function (req, res) {
    let candidate_id = req.body.candidate_id;
    if (!candidate_id) {
      return res.status(400).send({ message: 'Please provide candidate_id' });
    }
    db.query("UPDATE `customer_deatils` SET `status` = ? WHERE id = ?", [0, candidate_id], function (error, results, fields) {
      if (error) throw error;
      res.header("Access-Control-Allow-Origin", "*");
      return res.send({ error: false, data: results, message: 'candidate has been deleted successfully.' });
    });
  });


});

//------------------------------------------------------ API's For Customers ends -----------------------------------------


//------------------------------------------------------ API's For Users start --------------------------------------------

// API for adding new user details
app.post('/addUser', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  // Extract user details from the request body
  let {
    user_id,
    user_name,
    user_type,
    user_type_id,
    mobile_no,
    alternate_mobile_no,
    email_id,
    password,
    gender,
    address,
    city,
    state,
    country,
    added_on,
    added_by,
    updated_on,
    updated_by
  } = req.body;

  // Check if required fields are provided
  if (!user_id || !user_name || !user_type_id || !mobile_no || !email_id || !password) {
    res.header("Content-Type", "application/json");
    return res.status(400).send({ error: true, message: 'Please provide all required fields.' });
  }

  let deleted = 0;
  let status = 1;
  // Prepare the data object to be inserted into the database
  const user = {
    user_id,
    user_name,
    user_type,
    user_type_id,
    mobile_no,
    alternate_mobile_no,
    email_id,
    password,
    gender,
    address,
    city,
    state,
    country,
    added_on,
    added_by,
    updated_on,
    updated_by,
    deleted,
    status
  };

  // Execute the INSERT query
  db.query("INSERT INTO `user_details` SET ?", user, function (error, results, fields) {
    if (error) throw error;
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send({ error: false, data: results, message: 'New user has been added successfully.' });
  });
});



// API for updating user details
app.put('/updateUser/:id', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  let id = req.params.id;

  // Extract user details from the request body
  let {
    user_name,
    user_type,
    user_type_id,
    mobile_no,
    alternate_mobile_no,
    email_id,
    password,
    gender,
    address,
    city,
    state,
    country,
    added_on,
    added_by,
    updated_on,
    updated_by
  } = req.body;

  // Check if required fields are provided
  if (!user_name || !user_type_id || !mobile_no || !email_id || !password) {
    res.header("Content-Type", "application/json");
    return res.status(400).send({ error: true, message: 'Please provide all required fields.' });
  }

  let deleted = 0;
  let status = 1;

  // Prepare the data object to be updated in the database
  const updatedUser = {
    user_name,
    user_type,
    user_type_id,
    mobile_no,
    alternate_mobile_no,
    email_id,
    password,
    gender,
    address,
    city,
    state,
    country,
    added_on,
    added_by,
    updated_on,
    updated_by,
    deleted,
    status
  };

  // Execute the UPDATE query
  db.query("UPDATE `user_details` SET ? WHERE id = ?", [updatedUser, id], function (error, results, fields) {
    if (error) throw error;
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send({ error: false, data: results, message: 'User details have been updated successfully.' });
  });
});


// API for updating user password
app.put('/updateUserPassword/:id', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  let id = req.params.id;
  let new_password = req.body.new_password;

  // Check if the new_password is provided
  if (!new_password) {
    res.header("Content-Type", "application/json");
    return res.status(400).send({ error: true, message: 'Please provide the new password.' });
  }

  // Prepare the data object to update the password in the database
  const updatedPassword = {
    password: new_password
  };

  // Execute the UPDATE query to update the user's password
  db.query("UPDATE `user_details` SET ? WHERE id = ?", [updatedPassword, id], function (error, results, fields) {
    if (error) throw error;
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send({ error: false, data: results, message: 'User password has been updated successfully.' });
  });
});


//API to get all users
app.get('/getAllUsers', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");

  // Assuming you have established a database connection (`db`)

  // Execute the SELECT query to fetch all users
  db.query("SELECT * FROM `user_details`", function (error, results, fields) {
    if (error) throw error;
    res.header("Content-Type", "application/json");
    res.header("Access-Control-Allow-Origin", "*");
    return res.send({ error: false, data: results, message: 'All users retrieved successfully.' });
  });
});



// Delete users by updating status
app.put('/deleteUser', function (req, res) {
  let user_id = req.body.user_id;
  if (!user_id) {
    return res.status(400).send({ message: 'Please provide user_id' });
  }
  db.query("UPDATE `user_details` SET `status` = ? WHERE id = ?", [0, user_id], function (error, results, fields) {
    if (error) throw error;
    res.header("Access-Control-Allow-Origin", "*");
    return res.send({ error: false, data: results, message: 'User has been deleted successfully.' });
  });
});


//------------------------------------------------------ API's For Users ends -----------------------------------------












// Run on port
app.listen(PORT_NO, () => {
  console.log(`Example app listening at http://localhost:${PORT_NO}`)

});