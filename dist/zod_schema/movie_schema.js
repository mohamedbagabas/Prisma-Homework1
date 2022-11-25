"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie_schema = void 0;
const zod_1 = require("zod");
exports.movie_schema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required !' })
            .min(3, 'You id must be more than 3 char'),
        name: zod_1.z
            .string({ required_error: 'name is required !' }),
        gener: zod_1.z
            .enum(['Drama', 'Action', 'Comedy']),
        Rating: zod_1.z.
            number({ required_error: 'Rating is requird !' })
            .max(5, 'Rating number must be from 1-5'),
        duration: zod_1.z
            .number({ required_error: 'Duration is required !' })
            .min(60, "Duration must be more than 60min"),
    }),
});
