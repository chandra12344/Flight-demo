package com.example.demo2.demo2.product;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo2.demo2.Flight;

public interface FlightRepository extends MongoRepository<Flight, Long> {
}

