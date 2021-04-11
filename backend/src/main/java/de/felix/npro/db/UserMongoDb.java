package de.felix.npro.db;

import de.felix.npro.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserMongoDb extends PagingAndSortingRepository<User, String> {
}
