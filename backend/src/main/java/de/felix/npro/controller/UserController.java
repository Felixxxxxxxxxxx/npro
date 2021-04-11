package de.felix.npro.controller;

import de.felix.npro.db.UserMongoDb;
import de.felix.npro.model.User;
import de.felix.npro.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;

    }

    @GetMapping("{username}")
    public User getUser(@PathVariable String username) {

        if (userService.getUserByUsername(username).isPresent()) {

            return userService.getUserByUsername(username).get();
        }

        return null;

    }

}
