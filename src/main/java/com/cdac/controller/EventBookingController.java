package com.cdac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cdac.entity.EventBooking;
import com.cdac.service.EventBookingService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class EventBookingController {

    @Autowired
    private EventBookingService eventBookingService;

    // Create operation
    @PostMapping("/createeventBooking")
    
    public ResponseEntity<EventBooking> createEventBooking(@RequestBody EventBooking eventBooking) {
        EventBooking createdEventBooking = eventBookingService.createEventBooking(eventBooking);
        return new ResponseEntity<>(createdEventBooking, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping("/getallevents")
    public ResponseEntity<List<EventBooking>> getAllEventBookings() {
        List<EventBooking> eventBookings = eventBookingService.getAllEventBookings();
        return new ResponseEntity<>(eventBookings, HttpStatus.OK);
    }

    @GetMapping("/getevent/{id}")
    public ResponseEntity<EventBooking> getEventBookingById(@PathVariable("id") int id) {
        Optional<EventBooking> eventBooking = eventBookingService.getEventBookingById(id);
        return eventBooking.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                          .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/update/{id}")
    public ResponseEntity<EventBooking> updateEventBooking(@PathVariable("id") int id, @RequestBody EventBooking eventBooking) {
        eventBooking.setId(id); // Ensure the ID is set for the update operation
        EventBooking updatedEventBooking = eventBookingService.updateEventBooking(eventBooking);
        return new ResponseEntity<>(updatedEventBooking, HttpStatus.OK);
    }

   // Delete operation
    @DeleteMapping("/eventdelete/{id}")
    public ResponseEntity<Void> deleteEventBooking(@PathVariable("id") int id) {
        eventBookingService.deleteEventBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
//    @DeleteMapping("/eventdelete/{id}")
//    public ResponseEntity<Void> deleteEventBooking(@PathVariable("id") int id) {
//        try {
//        	eventBookingService.deleteEventBooking(id);
//            return ResponseEntity.noContent().build();
//        } catch (Exception e) {
//            // Log the exception
//            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//        }
    
    
    }





