package com.example.MyTry.model;

import java.util.UUID;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;
import org.springframework.data.cassandra.core.mapping.Table;

@Table
public class User {
	
	@PrimaryKey
	private UUID id;

	private String email;
	private String password;
	private String cpassword;

//	public User() {
//	not required
//	}
	
//	wants the id therefore return id
	public UUID getId() {
		return id;
	}
//	if add to db then set id that it sends 
	public void setId(UUID id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	
	
	//all this returns objects stored in db format(hash) therefore should be readable and hence convert to string
	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", cpassword=" + cpassword + "]";
	}


}
