import { z, TypeOf } from 'zod';

export const addmovie_schema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(2, 'You id must be more than 2 char'),
    name: z
      .string({ required_error: 'name is required !' })
      ,
      gener:z
      .enum(['Drama' , 'Action' , 'Comedy']),
    rating: z.
    number({ required_error: 'Rating is requird !' })
    .max(5, 'Rating number must be from 1-5'), 
    
    duration: z 
      .number({ required_error: 'Duration is required !' })
      .min(60,"Duration must be more than 60min"),
      createdate:z.
      date({required_error: 'Date is required !'})
      
      
   
}),
});

export const updatemovie_schema = z.object({
  body: z.object({
    
    id: z.string({ required_error: 'ID is required !' })
    .min(2, 'You id must be more than 2 char'),
    name: z
      .string({ required_error: 'name is required !' })
      ,
      gener:z
      .enum(['Drama' , 'Action' , 'Comedy']),
    rating: z.
    number({ required_error: 'Rating is requird !' })
    .max(5, 'Rating number must be from 1-5'), 
    
    duration: z 
      .number({ required_error: 'Duration is required !' })
      .min(60,"Duration must be more than 60min"),
      createdate:z.
      date({required_error: 'Date is required !'})

      
      
      
   
}),
params: z.object({
  id: z.string({ required_error: 'Please send id in the params' }),
}),



});

export const deletemovie_schema = z.object({
  params: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export const onemovie_schema = z.object({
  query: z.object({
    id: z.string({ required_error: 'Please send id in the params' }),
  }),
});

export type MovieSchemaType = TypeOf<typeof updatemovie_schema>['body'];

export type GetOneMovieSchemaType = z.infer<
  typeof onemovie_schema
>['query'];