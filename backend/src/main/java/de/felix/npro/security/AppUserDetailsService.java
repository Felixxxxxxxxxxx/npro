package de.felix.npro.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class AppUserDetailsService implements UserDetailsService {

    private final AppUserDb userDb;

    @Autowired
    public AppUserDetailsService(AppUserDb userDb){
        this.userDb = userDb;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = this.userDb.findById(username)
                .orElseThrow(() -> new UsernameNotFoundException("User does not exist: "+username));

        return User.builder()
                .username(appUser.getUsername())
                .password(appUser.getPassword())
                .authorities("user")
                .build();

    }

}
