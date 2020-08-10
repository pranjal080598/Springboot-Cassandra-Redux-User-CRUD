package com.example.MyTry.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.datastax.driver.core.utils.UUIDs;
import com.example.MyTry.model.User;
import com.example.MyTry.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")

public class UserController {

	@Autowired
	UserRepository userRepository;

	//	get request from user.js in actions folder
	@GetMapping("/users")
	//create function getallusers that returns the users in db in the form of list as objects are not returned
	public List<User> getAllUsers() {
		//printed on cmd line
		System.out.println("Get all Users...");
		//object calls findall inbuilt function
		return userRepository.findAll();
	}


	//post request 
	@PostMapping("/users/create")
	//inbuilt response entity to extract headers, body, etc
	//create function createuser that returns the users as html response entity
	// valid checks if the user object has all fields specified in user class
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		System.out.println("Create User: " + user.getEmail() + "...");
		//set unique timebased id, rest attributes(email,password, cpassword) comes in the body
		//setId is a function in User file
		user.setId(UUIDs.timeBased());
		//.save is to add to db
		User _user = userRepository.save(user);
		//return body, statuscode
		return new ResponseEntity<>(_user, HttpStatus.OK);
	}

	//update
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable("id") UUID id, @RequestBody User user) //user object sets values to user class retreived from requestbody

	{
		System.out.println("Update User with ID = " + id + "...");
		//if the id is present in db optional returns isPresent as true and get is executed
		//find the entry with the id
		Optional<User> userData = userRepository.findById(id);
		//if true
		if (userData.isPresent()) {
			//add row of that id in savedUser
			User savedUser = userData.get();
			//object.function is called and User class values are set to new values retreived from parameter user in the function updateuser
			savedUser.setEmail(user.getEmail());
			savedUser.setPassword(user.getPassword());
			savedUser.setCpassword(user.getCpassword());
			//save to db
			User updatedUser = userRepository.save(savedUser);
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	//delete
	@DeleteMapping("/users/{id}")
	//delete on the basis of id
	public ResponseEntity<String> deleteUser(@PathVariable("id") UUID id) {
		System.out.println("Delete User with ID = " + id + "...");
		try {
			//inbuilt function to delete from db
			userRepository.deleteById(id);
		} catch (Exception e) {
			return new ResponseEntity<>("Fail to delete!", HttpStatus.EXPECTATION_FAILED);
		}
		return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
	}

}
