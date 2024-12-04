import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";

const PortfolioModal = ({ imageDescription, imageIndex, onCommentSubmit }) => {
  const [show, setShow] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    if (onCommentSubmit) {
      onCommentSubmit({ comment, rating, imageIndex });
    }
    setShow(false);
    setComment(""); // Reset the comment field
    setRating(0); // Reset the rating field
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Click Me
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{imageDescription}</h5>
          <p>Provide your feedback below:</p>
          <Form>
            {/* Comment Field */}
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter your comment"
              />
            </Form.Group>

            {/* Rating System */}
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Row>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Col key={star} xs={2}>
                    <Form.Check
                      inline
                      type="radio"
                      label={star}
                      name="rating"
                      value={star}
                      checked={rating === star}
                      onChange={handleRatingChange}
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PortfolioModal;
