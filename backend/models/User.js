const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    college: {
      type: String,
      default: '',
      trim: true
    },

    semester: {
      type: String,
      default: ''
    },

    bio: {
      type: String,
      default: ''
    },

    skillsToTeach: {
      type: [String],
      default: []
    },

    skillsToLearn: {
      type: [String],
      default: []
    },

    subjects: {
      type: [String],
      default: []
    },

    // Password reset fields
    resetPasswordToken: {
      type: String,
      default: null
    },

    resetPasswordExpires: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)