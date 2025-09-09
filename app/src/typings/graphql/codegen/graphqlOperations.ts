import { useMutation, useQuery, useSuspenseQuery, UseMutationOptions, UseQueryOptions, UseSuspenseQueryOptions } from '@tanstack/react-query';
import { gqlFetcher } from '../../../app/api/client/graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  EmailAddress: { input: string; output: string; }
  JSONObject: { input: Record<string, unknown>; output: Record<string, unknown>; }
  NonEmptyString: { input: string; output: string; }
  NonNegativeInt: { input: number; output: number; }
  NonPositiveInt: { input: number; output: number; }
  PositiveInt: { input: number; output: number; }
  SafeInt: { input: number; output: number; }
}

export interface GraphQLAuthPayload {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: GraphQLUser;
}

export interface GraphQLAuthenticateUserInput {
  email: Scalars['EmailAddress']['input'];
  password: Scalars['String']['input'];
}

export interface GraphQLCreateUserInput {
  email: Scalars['EmailAddress']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
}

export interface GraphQLCreateWordInput {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  word: Scalars['String']['input'];
}

export interface GraphQLMutation {
  __typename?: 'Mutation';
  authenticateUser?: Maybe<GraphQLAuthPayload>;
  createUser?: Maybe<GraphQLAuthPayload>;
  createWord: GraphQLWordMutationResponse;
  deleteWord: GraphQLMutationResponse;
  updateWord: GraphQLWordMutationResponse;
}


export interface GraphQLMutationAuthenticateUserArgs {
  input: GraphQLAuthenticateUserInput;
}


export interface GraphQLMutationCreateUserArgs {
  input: GraphQLCreateUserInput;
}


export interface GraphQLMutationCreateWordArgs {
  input: GraphQLCreateWordInput;
}


export interface GraphQLMutationDeleteWordArgs {
  wordId: Scalars['ID']['input'];
}


export interface GraphQLMutationUpdateWordArgs {
  input: GraphQLUpdateWordInput;
}

export interface GraphQLMutationResponse {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface GraphQLQuery {
  __typename?: 'Query';
  me?: Maybe<GraphQLUser>;
  word: GraphQLWord;
  words: Array<Maybe<GraphQLWord>>;
}


export interface GraphQLQueryWordArgs {
  wordId: Scalars['ID']['input'];
}


export interface GraphQLQueryWordsArgs {
  input?: InputMaybe<GraphQLWordsInput>;
}

export interface GraphQLUpdateWordInput {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  word?: InputMaybe<Scalars['String']['input']>;
  wordId: Scalars['ID']['input'];
}

export interface GraphQLUser {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
}

export interface GraphQLWord {
  __typename?: 'Word';
  isFavorite: Scalars['Boolean']['output'];
  status: GraphQLWordStatus;
  word: Scalars['String']['output'];
  wordId: Scalars['ID']['output'];
}

export interface GraphQLWordMutationResponse extends GraphQLMutationResponse {
  __typename?: 'WordMutationResponse';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  word: GraphQLWord;
}

export type GraphQLWordStatus =
  | 'ACTIVE'
  | 'INACTIVE';

export interface GraphQLWordsInput {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
}

export type GraphQLAuthenticateUserMutationVariables = Exact<{
  input: GraphQLAuthenticateUserInput;
}>;


export type GraphQLAuthenticateUserMutation = { __typename?: 'Mutation', authenticateUser?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', userId: string } } | null };

export type GraphQLMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GraphQLMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', userId: string, email?: string | null, firstName?: string | null, lastName?: string | null } | null };

export type GraphQLUpdateWordMutationVariables = Exact<{
  input: GraphQLUpdateWordInput;
}>;


export type GraphQLUpdateWordMutation = { __typename?: 'Mutation', updateWord: { __typename?: 'WordMutationResponse', word: { __typename?: 'Word', wordId: string, word: string, isFavorite: boolean, status: GraphQLWordStatus } } };

export type GraphQLWordsQueryVariables = Exact<{
  input?: InputMaybe<GraphQLWordsInput>;
}>;


export type GraphQLWordsQuery = { __typename?: 'Query', words: Array<{ __typename?: 'Word', wordId: string, word: string, isFavorite: boolean, status: GraphQLWordStatus } | null> };



export const AuthenticateUserDocument = `
    mutation AuthenticateUser($input: AuthenticateUserInput!) {
  authenticateUser(input: $input) {
    token
    user {
      userId
    }
  }
}
    `;

export const useAuthenticateUserMutation = <
      TError = ReactQueryError,
      TContext = unknown
    >(options?: UseMutationOptions<GraphQLAuthenticateUserMutation, TError, GraphQLAuthenticateUserMutationVariables, TContext>) => {
    
    return useMutation<GraphQLAuthenticateUserMutation, TError, GraphQLAuthenticateUserMutationVariables, TContext>(
      {
    mutationKey: ['AuthenticateUser'],
    mutationFn: (variables?: GraphQLAuthenticateUserMutationVariables) => gqlFetcher<GraphQLAuthenticateUserMutation, GraphQLAuthenticateUserMutationVariables>(AuthenticateUserDocument, variables)(),
    ...options
  }
    )};

export const MeDocument = `
    query Me {
  me {
    userId
    email
    firstName
    lastName
  }
}
    `;

export const useMeQuery = <
      TData = GraphQLMeQuery,
      TError = ReactQueryError
    >(
      variables?: GraphQLMeQueryVariables,
      options?: Omit<UseQueryOptions<GraphQLMeQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GraphQLMeQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GraphQLMeQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Me'] : ['Me', variables],
    queryFn: gqlFetcher<GraphQLMeQuery, GraphQLMeQueryVariables>(MeDocument, variables),
    ...options
  }
    )};

export const useSuspenseMeQuery = <
      TData = GraphQLMeQuery,
      TError = ReactQueryError
    >(
      variables?: GraphQLMeQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GraphQLMeQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GraphQLMeQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GraphQLMeQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['MeSuspense'] : ['MeSuspense', variables],
    queryFn: gqlFetcher<GraphQLMeQuery, GraphQLMeQueryVariables>(MeDocument, variables),
    ...options
  }
    )};

export const UpdateWordDocument = `
    mutation UpdateWord($input: UpdateWordInput!) {
  updateWord(input: $input) {
    word {
      wordId
      word
      isFavorite
      status
    }
  }
}
    `;

export const useUpdateWordMutation = <
      TError = ReactQueryError,
      TContext = unknown
    >(options?: UseMutationOptions<GraphQLUpdateWordMutation, TError, GraphQLUpdateWordMutationVariables, TContext>) => {
    
    return useMutation<GraphQLUpdateWordMutation, TError, GraphQLUpdateWordMutationVariables, TContext>(
      {
    mutationKey: ['UpdateWord'],
    mutationFn: (variables?: GraphQLUpdateWordMutationVariables) => gqlFetcher<GraphQLUpdateWordMutation, GraphQLUpdateWordMutationVariables>(UpdateWordDocument, variables)(),
    ...options
  }
    )};

export const WordsDocument = `
    query Words($input: WordsInput) {
  words(input: $input) {
    wordId
    word
    isFavorite
    status
  }
}
    `;

export const useWordsQuery = <
      TData = GraphQLWordsQuery,
      TError = ReactQueryError
    >(
      variables?: GraphQLWordsQueryVariables,
      options?: Omit<UseQueryOptions<GraphQLWordsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseQueryOptions<GraphQLWordsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useQuery<GraphQLWordsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['Words'] : ['Words', variables],
    queryFn: gqlFetcher<GraphQLWordsQuery, GraphQLWordsQueryVariables>(WordsDocument, variables),
    ...options
  }
    )};

export const useSuspenseWordsQuery = <
      TData = GraphQLWordsQuery,
      TError = ReactQueryError
    >(
      variables?: GraphQLWordsQueryVariables,
      options?: Omit<UseSuspenseQueryOptions<GraphQLWordsQuery, TError, TData>, 'queryKey'> & { queryKey?: UseSuspenseQueryOptions<GraphQLWordsQuery, TError, TData>['queryKey'] }
    ) => {
    
    return useSuspenseQuery<GraphQLWordsQuery, TError, TData>(
      {
    queryKey: variables === undefined ? ['WordsSuspense'] : ['WordsSuspense', variables],
    queryFn: gqlFetcher<GraphQLWordsQuery, GraphQLWordsQueryVariables>(WordsDocument, variables),
    ...options
  }
    )};

export const namedOperations = {
  Query: {
    Me: 'Me',
    Words: 'Words'
  },
  Mutation: {
    AuthenticateUser: 'AuthenticateUser',
    UpdateWord: 'UpdateWord'
  }
}