'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _genres = require('./genres');

var _genres2 = _interopRequireDefault(_genres);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;

var MovieSchema = new Schema({
    'name': {
        type: String,
        require: true
    },
    'genre': {
        type: _mongoose2.default.Schema.Types.ObjectId,
        require: true,
        ref: 'Genres'
    },
    'synopsis': {
        type: String,
        require: true
    },
    'cast': {
        type: String,
        require: true
    },
    'year': {
        type: Date,
        require: true
    },
    'lenght': {
        type: String,
        require: true
    }
}, { 'collection': 'movies', timestamps: true });

exports.default = _mongoose2.default.model('movies', MovieSchema);