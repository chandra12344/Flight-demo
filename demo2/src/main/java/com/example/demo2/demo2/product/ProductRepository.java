package com.example.demo2.demo2.product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo2.demo2.Flight;
@Repository
public interface ProductRepository extends JpaRepository<Flight, Long> {
   
}

