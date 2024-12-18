import mongoose from "mongoose";

const dfPostSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  location: { type: String },
  imageUrl: { type: String },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }], // Set default to an empty array
  dislikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", default: [] }], // Set default to an empty array
  timestamp: { type: Date, default: Date.now },
  tags: { type: [String], default: [] },
  sentimentMetrics: {
    type: Map,
    of: String, // Maps sentiment categories to values (e.g., positive, negative)
    required: true,
    default: {
      "Hate Speech": "negative",
      "Harassment and Bullying": "negative",
      "Sexual Content": "negative",
      "Spam and Scams": "negative"
    }
  },
  isReviewed: { type: Boolean, default: false } // Add the isReviewed field with a default of false
});

export default mongoose.models.dfPost || mongoose.model("dfPost", dfPostSchema);
