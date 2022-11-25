"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onemovie_schema = exports.deletemovie_schema = exports.updatemovie_schema = exports.addmovie_schema = void 0;
const zod_1 = require("zod");
exports.addmovie_schema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required !' })
            .min(2, 'You id must be more than 2 char'),
        name: zod_1.z
            .string({ required_error: 'name is required !' }),
        gener: zod_1.z
            .enum(['Drama', 'Action', 'Comedy']),
        rating: zod_1.z.
            number({ required_error: 'Rating is requird !' })
            .max(5, 'Rating number must be from 1-5'),
        duration: zod_1.z
            .number({ required_error: 'Duration is required !' })
            .min(60, "Duration must be more than 60min"),
        createdate: zod_1.z.
            date({ required_error: 'Date is required !' })
    }),
});
exports.updatemovie_schema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'ID is required !' })
            .min(2, 'You id must be more than 2 char'),
        name: zod_1.z
            .string({ required_error: 'name is required !' }),
        gener: zod_1.z
            .enum(['Drama', 'Action', 'Comedy']),
        rating: zod_1.z.
            number({ required_error: 'Rating is requird !' })
            .max(5, 'Rating number must be from 1-5'),
        duration: zod_1.z
            .number({ required_error: 'Duration is required !' })
            .min(60, "Duration must be more than 60min"),
        createdate: zod_1.z.
            date({ required_error: 'Date is required !' })
    }),
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Please send id in the params' }),
    }),
});
exports.deletemovie_schema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Please send id in the params' }),
    }),
});
exports.onemovie_schema = zod_1.z.object({
    query: zod_1.z.object({
        id: zod_1.z.string({ required_error: 'Please send id in the params' }),
    }),
});
