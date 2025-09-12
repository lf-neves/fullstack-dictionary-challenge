import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export interface GraphQLDefinition {
  __typename?: 'Definition';
  definition: Scalars['String']['output'];
  example?: Maybe<Scalars['String']['output']>;
}

export interface GraphQLMeaning {
  __typename?: 'Meaning';
  antonyms?: Maybe<Array<Scalars['String']['output']>>;
  definitions: Array<GraphQLDefinition>;
  partOfSpeech: Scalars['String']['output'];
  synonyms?: Maybe<Array<Scalars['String']['output']>>;
}

export interface GraphQLMutation {
  __typename?: 'Mutation';
  authenticateUser?: Maybe<GraphQLAuthPayload>;
  createUser?: Maybe<GraphQLAuthPayload>;
  createWord: GraphQLWordMutationResponse;
  deleteWord: GraphQLMutationResponse;
  trackWordVisitHistory: GraphQLMutationResponse;
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


export interface GraphQLMutationTrackWordVisitHistoryArgs {
  input: GraphQLTrackWordVisitHistoryInput;
}


export interface GraphQLMutationUpdateWordArgs {
  input: GraphQLUpdateWordInput;
}

export interface GraphQLMutationResponse {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
}

export interface GraphQLPhonetic {
  __typename?: 'Phonetic';
  audio: Scalars['String']['output'];
  text: Scalars['String']['output'];
}

export interface GraphQLQuery {
  __typename?: 'Query';
  me?: Maybe<GraphQLUser>;
  userVisitedWordsHistory: Array<GraphQLUserWordHistory>;
  word: GraphQLWord;
  words: Array<GraphQLWord>;
}


export interface GraphQLQueryWordArgs {
  wordId: Scalars['ID']['input'];
}


export interface GraphQLQueryWordsArgs {
  input?: InputMaybe<GraphQLWordsInput>;
}

export interface GraphQLTrackWordVisitHistoryInput {
  wordId: Scalars['ID']['input'];
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
  userWordHistory: Array<GraphQLUserWordHistory>;
}

export interface GraphQLUserWordHistory {
  __typename?: 'UserWordHistory';
  lastVisitedAt: Scalars['DateTime']['output'];
  userWordHistoryId: Scalars['ID']['output'];
  word: GraphQLWord;
}

export interface GraphQLWord {
  __typename?: 'Word';
  isFavorite: Scalars['Boolean']['output'];
  meanings: Array<GraphQLMeaning>;
  phonetics: Array<GraphQLPhonetic>;
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

export enum GraphQLWordStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export interface GraphQLWordsInput {
  isFavorite?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['PositiveInt']['input']>;
  page?: InputMaybe<Scalars['PositiveInt']['input']>;
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type GraphQLResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  MutationResponse: ( GraphQLWordMutationResponse );
};

/** Mapping between all available schema types and the resolvers types */
export type GraphQLResolversTypes = {
  AuthPayload: ResolverTypeWrapper<GraphQLAuthPayload>;
  AuthenticateUserInput: GraphQLAuthenticateUserInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateUserInput: GraphQLCreateUserInput;
  CreateWordInput: GraphQLCreateWordInput;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Definition: ResolverTypeWrapper<GraphQLDefinition>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']['output']>;
  Meaning: ResolverTypeWrapper<GraphQLMeaning>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<GraphQLResolversInterfaceTypes<GraphQLResolversTypes>['MutationResponse']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']['output']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']['output']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']['output']>;
  Phonetic: ResolverTypeWrapper<GraphQLPhonetic>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']['output']>;
  Query: ResolverTypeWrapper<{}>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TrackWordVisitHistoryInput: GraphQLTrackWordVisitHistoryInput;
  UpdateWordInput: GraphQLUpdateWordInput;
  User: ResolverTypeWrapper<GraphQLUser>;
  UserWordHistory: ResolverTypeWrapper<GraphQLUserWordHistory>;
  Word: ResolverTypeWrapper<GraphQLWord>;
  WordMutationResponse: ResolverTypeWrapper<GraphQLWordMutationResponse>;
  WordStatus: GraphQLWordStatus;
  WordsInput: GraphQLWordsInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type GraphQLResolversParentTypes = {
  AuthPayload: GraphQLAuthPayload;
  AuthenticateUserInput: GraphQLAuthenticateUserInput;
  Boolean: Scalars['Boolean']['output'];
  CreateUserInput: GraphQLCreateUserInput;
  CreateWordInput: GraphQLCreateWordInput;
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Definition: GraphQLDefinition;
  EmailAddress: Scalars['EmailAddress']['output'];
  ID: Scalars['ID']['output'];
  JSONObject: Scalars['JSONObject']['output'];
  Meaning: GraphQLMeaning;
  Mutation: {};
  MutationResponse: GraphQLResolversInterfaceTypes<GraphQLResolversParentTypes>['MutationResponse'];
  NonEmptyString: Scalars['NonEmptyString']['output'];
  NonNegativeInt: Scalars['NonNegativeInt']['output'];
  NonPositiveInt: Scalars['NonPositiveInt']['output'];
  Phonetic: GraphQLPhonetic;
  PositiveInt: Scalars['PositiveInt']['output'];
  Query: {};
  SafeInt: Scalars['SafeInt']['output'];
  String: Scalars['String']['output'];
  TrackWordVisitHistoryInput: GraphQLTrackWordVisitHistoryInput;
  UpdateWordInput: GraphQLUpdateWordInput;
  User: GraphQLUser;
  UserWordHistory: GraphQLUserWordHistory;
  Word: GraphQLWord;
  WordMutationResponse: GraphQLWordMutationResponse;
  WordsInput: GraphQLWordsInput;
};

export type GraphQLAuthPayloadResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['AuthPayload'] = GraphQLResolversParentTypes['AuthPayload']> = {
  token?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<GraphQLResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLDateScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['Date'], any> {
  name: 'Date';
}

export interface GraphQLDateTimeScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GraphQLDefinitionResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Definition'] = GraphQLResolversParentTypes['Definition']> = {
  definition?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  example?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLEmailAddressScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface GraphQLJsonObjectScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type GraphQLMeaningResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Meaning'] = GraphQLResolversParentTypes['Meaning']> = {
  antonyms?: Resolver<Maybe<Array<GraphQLResolversTypes['String']>>, ParentType, ContextType>;
  definitions?: Resolver<Array<GraphQLResolversTypes['Definition']>, ParentType, ContextType>;
  partOfSpeech?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  synonyms?: Resolver<Maybe<Array<GraphQLResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLMutationResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Mutation'] = GraphQLResolversParentTypes['Mutation']> = {
  authenticateUser?: Resolver<Maybe<GraphQLResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<GraphQLMutationAuthenticateUserArgs, 'input'>>;
  createUser?: Resolver<Maybe<GraphQLResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<GraphQLMutationCreateUserArgs, 'input'>>;
  createWord?: Resolver<GraphQLResolversTypes['WordMutationResponse'], ParentType, ContextType, RequireFields<GraphQLMutationCreateWordArgs, 'input'>>;
  deleteWord?: Resolver<GraphQLResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<GraphQLMutationDeleteWordArgs, 'wordId'>>;
  trackWordVisitHistory?: Resolver<GraphQLResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<GraphQLMutationTrackWordVisitHistoryArgs, 'input'>>;
  updateWord?: Resolver<GraphQLResolversTypes['WordMutationResponse'], ParentType, ContextType, RequireFields<GraphQLMutationUpdateWordArgs, 'input'>>;
};

export type GraphQLMutationResponseResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['MutationResponse'] = GraphQLResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<'WordMutationResponse', ParentType, ContextType>;
  code?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<GraphQLResolversTypes['Boolean'], ParentType, ContextType>;
};

export interface GraphQLNonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface GraphQLNonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface GraphQLNonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export type GraphQLPhoneticResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Phonetic'] = GraphQLResolversParentTypes['Phonetic']> = {
  audio?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GraphQLPositiveIntScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export type GraphQLQueryResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Query'] = GraphQLResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<GraphQLResolversTypes['User']>, ParentType, ContextType>;
  userVisitedWordsHistory?: Resolver<Array<GraphQLResolversTypes['UserWordHistory']>, ParentType, ContextType>;
  word?: Resolver<GraphQLResolversTypes['Word'], ParentType, ContextType, RequireFields<GraphQLQueryWordArgs, 'wordId'>>;
  words?: Resolver<Array<GraphQLResolversTypes['Word']>, ParentType, ContextType, Partial<GraphQLQueryWordsArgs>>;
};

export interface GraphQLSafeIntScalarConfig extends GraphQLScalarTypeConfig<GraphQLResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export type GraphQLUserResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['User'] = GraphQLResolversParentTypes['User']> = {
  email?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<GraphQLResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  userWordHistory?: Resolver<Array<GraphQLResolversTypes['UserWordHistory']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLUserWordHistoryResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['UserWordHistory'] = GraphQLResolversParentTypes['UserWordHistory']> = {
  lastVisitedAt?: Resolver<GraphQLResolversTypes['DateTime'], ParentType, ContextType>;
  userWordHistoryId?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  word?: Resolver<GraphQLResolversTypes['Word'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLWordResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['Word'] = GraphQLResolversParentTypes['Word']> = {
  isFavorite?: Resolver<GraphQLResolversTypes['Boolean'], ParentType, ContextType>;
  meanings?: Resolver<Array<GraphQLResolversTypes['Meaning']>, ParentType, ContextType>;
  phonetics?: Resolver<Array<GraphQLResolversTypes['Phonetic']>, ParentType, ContextType>;
  status?: Resolver<GraphQLResolversTypes['WordStatus'], ParentType, ContextType>;
  word?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  wordId?: Resolver<GraphQLResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLWordMutationResponseResolvers<ContextType = any, ParentType extends GraphQLResolversParentTypes['WordMutationResponse'] = GraphQLResolversParentTypes['WordMutationResponse']> = {
  code?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<GraphQLResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<GraphQLResolversTypes['Boolean'], ParentType, ContextType>;
  word?: Resolver<GraphQLResolversTypes['Word'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphQLResolvers<ContextType = any> = {
  AuthPayload?: GraphQLAuthPayloadResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Definition?: GraphQLDefinitionResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  Meaning?: GraphQLMeaningResolvers<ContextType>;
  Mutation?: GraphQLMutationResolvers<ContextType>;
  MutationResponse?: GraphQLMutationResponseResolvers<ContextType>;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  Phonetic?: GraphQLPhoneticResolvers<ContextType>;
  PositiveInt?: GraphQLScalarType;
  Query?: GraphQLQueryResolvers<ContextType>;
  SafeInt?: GraphQLScalarType;
  User?: GraphQLUserResolvers<ContextType>;
  UserWordHistory?: GraphQLUserWordHistoryResolvers<ContextType>;
  Word?: GraphQLWordResolvers<ContextType>;
  WordMutationResponse?: GraphQLWordMutationResponseResolvers<ContextType>;
};

