INSERT INTO customers (
  first_name, last_name, email, phone, address1, address2, city, state, notes, active, created_at, updated_at
) VALUES
  ('John', 'Doe', 'john.doe@example.com', '+1-555-1234', '123 Elm St', NULL, 'Springfield', 'IL', 'Regular customer', true, now(), now()),
  ('Jane', 'Smith', 'jane.smith@example.com', '+1-555-5678', '456 Oak Ave', 'Apt 12B', 'Chicago', 'IL', 'Prefers email communication', true, '2024-01-02 12:00:00', '2024-01-02 12:00:00'),
  ('Michael', 'Brown', 'michael.brown@example.com', '+1-555-9876', '789 Pine Rd', NULL, 'Peoria', 'IL', 'Frequent buyer', true, '2024-01-03 14:30:00', '2024-01-03 14:30:00'),
  ('Emily', 'Johnson', 'emily.johnson@example.com', '+1-555-6543', '321 Birch Ln', NULL, 'Naperville', 'IL', 'VIP customer', true, '2024-01-04 16:00:00', '2024-01-04 16:00:00'),
  ('Chris', 'Wilson', 'chris.wilson@example.com', '+1-555-4321', '987 Maple St', 'Suite 200', 'Evanston', 'IL', 'No special notes', false, '2024-01-05 18:00:00', '2024-01-05 18:00:00');
