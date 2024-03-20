package com.cdac.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.entity.EventBooking;
import com.cdac.repository.EventBookingRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EventBookingService {

    @Autowired
    private EventBookingRepository eventBookingRepository;

    // Create operation
    public EventBooking createEventBooking(EventBooking eventBooking) {
        return eventBookingRepository.save(eventBooking);
    }

    // Read operation
    public List<EventBooking> getAllEventBookings() {
        return eventBookingRepository.findAll();
    }

    public Optional<EventBooking> getEventBookingById(int id) {
        return eventBookingRepository.findById(id);
    }

    // Update operation
    public EventBooking updateEventBooking(EventBooking eventBooking) {
        return eventBookingRepository.save(eventBooking);
    }

    // Delete operation
    public void deleteEventBooking(int id) {
        eventBookingRepository.deleteById(id);
    }
}
