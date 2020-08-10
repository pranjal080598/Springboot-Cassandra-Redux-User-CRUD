package com.example.MyTry.repository;


import java.util.UUID;
import org.springframework.data.cassandra.repository.CassandraRepository;
import com.example.MyTry.model.User;

//pass model (User) and unique identifier's(id) type(UUID)
public interface UserRepository extends CassandraRepository<User, UUID>{

}


