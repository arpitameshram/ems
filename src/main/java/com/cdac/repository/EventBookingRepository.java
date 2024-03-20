package com.cdac.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entity.EventBooking;

public interface EventBookingRepository extends JpaRepository<EventBooking, Integer>{

	Optional<EventBooking> findById(int id);

	public void deleteById(int id);
	
}

