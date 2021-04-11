package de.felix.npro.service;

import de.felix.npro.db.UserMongoDb;

import de.felix.npro.model.User;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import java.util.Optional;


@Service
public class UserService {


    private final UserMongoDb userDb;

    @Autowired
    public UserService(UserMongoDb userDb) {
        this.userDb = userDb;

    }




    public Optional<User> getUserByUsername(String username) {
        return userDb.findById(username);
    }



}




