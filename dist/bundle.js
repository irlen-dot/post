/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 577:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthorizationReolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const LoginInput_1 = __webpack_require__(407);
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const user_1 = __webpack_require__(287);
let AuthorizationReolver = class AuthorizationReolver {
    login(theParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const TheUser = yield typeorm_1.getRepository(user_1.User);
            const TheEmail = theParametr.email;
            const TheUsername = theParametr.username;
            const ThePassword = theParametr.password;
            const EmailFind = yield TheUser.findOne({ where: { email: TheEmail } });
            const UsernameFind = yield TheUser.findOne({
                where: { username: TheUsername },
            });
            if (!EmailFind && !UsernameFind) {
                return null;
            }
            if (EmailFind) {
                const PasswordMatch = yield bcryptjs_1.default.compare(ThePassword, EmailFind.password);
                if (!PasswordMatch) {
                    return null;
                }
                else {
                    return EmailFind;
                }
            }
            if (UsernameFind) {
                const PasswordMatch = yield bcryptjs_1.default.compare(ThePassword, UsernameFind.password);
                if (!PasswordMatch) {
                    return null;
                }
                else {
                    return UsernameFind;
                }
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(() => user_1.User),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput_1.LoginArgs]),
    __metadata("design:returntype", Promise)
], AuthorizationReolver.prototype, "login", null);
AuthorizationReolver = __decorate([
    type_graphql_1.Resolver()
], AuthorizationReolver);
exports.AuthorizationReolver = AuthorizationReolver;


/***/ }),

/***/ 933:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentsReolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const ObjectComment_1 = __webpack_require__(606);
const ObjectPost_1 = __webpack_require__(685);
const CommentInput_1 = __webpack_require__(113);
let CommentsReolver = class CommentsReolver {
    createComment(singlePar) {
        return __awaiter(this, void 0, void 0, function* () {
            const rep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            const postObj = yield rep.findOne({ id: singlePar.postId });
            console.log(postObj);
            if (!postObj)
                return;
            const commentObj = new ObjectComment_1.ObjectComment(singlePar.description, postObj);
            commentObj.post = postObj;
            yield commentObj.save();
            if (postObj.comments == undefined || postObj.comments == null) {
                postObj.comments = [];
            }
            postObj.comments.push(commentObj);
            yield postObj.save();
            return commentObj;
        });
    }
    getComments(postId) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            const commentRep = yield typeorm_1.getRepository(ObjectComment_1.ObjectComment);
            const postObj = yield commentRep.findAndCount({
                where: {
                    post: postId,
                },
                take: 5,
            });
            return postObj[0];
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => ObjectComment_1.ObjectComment, { nullable: true }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CommentInput_1.CreateCommentArgsType]),
    __metadata("design:returntype", Promise)
], CommentsReolver.prototype, "createComment", null);
__decorate([
    type_graphql_1.Query(() => [ObjectComment_1.ObjectComment], { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentsReolver.prototype, "getComments", null);
CommentsReolver = __decorate([
    type_graphql_1.Resolver()
], CommentsReolver);
exports.CommentsReolver = CommentsReolver;


/***/ }),

/***/ 987:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostResolver = void 0;
const type_graphql_1 = __webpack_require__(885);
const ObjectPost_1 = __webpack_require__(685);
const InputPost_1 = __webpack_require__(25);
const typeorm_1 = __webpack_require__(794);
const checkInput_1 = __webpack_require__(940);
let PostResolver = class PostResolver {
    createPost(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnPost = new ObjectPost_1.PostObjectType();
            returnPost.description = singleParametr.description;
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            yield postRep.save(returnPost);
            return returnPost;
        });
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            const post = yield postRep.findOne({ id });
            const postObj = yield postRep
                .createQueryBuilder("post")
                .leftJoinAndSelect("post.comments", "comment")
                .where("post.id = :id", { id })
                .getOne();
            console.log(postObj);
            return post;
        });
    }
};
__decorate([
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { nullable: true }),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostArgsType]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Query(() => ObjectPost_1.PostObjectType, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "getPost", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ 781:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestResolver = void 0;
const type_graphql_1 = __webpack_require__(885);
let TestResolver = class TestResolver {
    helloWorld() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hello World!";
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestResolver.prototype, "helloWorld", null);
TestResolver = __decorate([
    type_graphql_1.Resolver()
], TestResolver);
exports.TestResolver = TestResolver;


/***/ }),

/***/ 561:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserResolver = void 0;
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const type_graphql_1 = __webpack_require__(885);
const UserArgs_1 = __webpack_require__(487);
const user_1 = __webpack_require__(287);
const keys_1 = __webpack_require__(841);
const signOption_1 = __webpack_require__(97);
const jwt = __importStar(__webpack_require__(722));
let UserResolver = class UserResolver {
    register(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnUser = new user_1.User();
            returnUser.firstName = singleParametr.firstName;
            returnUser.lastName = singleParametr.lastName;
            returnUser.email = singleParametr.email;
            returnUser.password = yield bcryptjs_1.default.hash(singleParametr.password, 12);
            returnUser.username = singleParametr.username;
            yield returnUser.save();
            const tokenUser = jwt.sign({
                id: returnUser.id,
                firstName: returnUser.firstName,
                lastName: returnUser.lastName,
                email: returnUser.email,
                username: returnUser.username,
            }, keys_1.PrivateKey, signOption_1.SignOption);
            returnUser.token = tokenUser;
            yield returnUser.save();
            return tokenUser;
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => String),
    __param(0, type_graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserArgs_1.UserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(906);
const type_graphql_1 = __webpack_require__(885);
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(685);
const UserResolver_1 = __webpack_require__(561);
const user_1 = __webpack_require__(287);
const AuthorizationReolver_1 = __webpack_require__(577);
const ObjectComment_1 = __webpack_require__(606);
const checkInput_1 = __webpack_require__(940);
const PostResolver_1 = __webpack_require__(987);
const TestReolver_1 = __webpack_require__(781);
const CommentResolver_1 = __webpack_require__(933);
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            name: "default",
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "hellomik",
            password: "2106",
            database: "posts",
            synchronize: true,
            logging: true,
            entities: [ObjectPost_1.PostObjectType, user_1.User, ObjectComment_1.ObjectComment],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [
                TestReolver_1.TestResolver,
                CommentResolver_1.CommentsReolver,
                UserResolver_1.UserResolver,
                AuthorizationReolver_1.AuthorizationReolver,
                PostResolver_1.PostResolver,
            ],
            globalMiddlewares: [checkInput_1.isAuth],
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
        });
        server.listen(PORT, () => {
            console.log("Server started, bitch");
        });
    });
}
Bootstrap();


/***/ }),

/***/ 940:
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isAuth = void 0;
const isAuth = ({ info, context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    return next();
});
exports.isAuth = isAuth;


/***/ }),

/***/ 287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column("text", { unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
User = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], User);
exports.User = User;


/***/ }),

/***/ 606:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectComment = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(685);
let ObjectComment = class ObjectComment extends typeorm_1.BaseEntity {
    constructor(body, post) {
        super();
        this.body = body || "";
        this.post = post;
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], ObjectComment.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ObjectComment.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.PostObjectType),
    typeorm_1.ManyToOne(() => ObjectPost_1.PostObjectType, (post) => post.comments),
    __metadata("design:type", ObjectPost_1.PostObjectType)
], ObjectComment.prototype, "post", void 0);
ObjectComment = __decorate([
    typeorm_1.Entity("comment"),
    type_graphql_1.ObjectType(),
    __metadata("design:paramtypes", [String, ObjectPost_1.PostObjectType])
], ObjectComment);
exports.ObjectComment = ObjectComment;


/***/ }),

/***/ 685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostObjectType = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const ObjectComment_1 = __webpack_require__(606);
let PostObjectType = class PostObjectType extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], PostObjectType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], PostObjectType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectComment_1.ObjectComment, (comments) => comments.post),
    __metadata("design:type", Array)
], PostObjectType.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], PostObjectType.prototype, "isActive", void 0);
PostObjectType = __decorate([
    typeorm_1.Entity("post"),
    type_graphql_1.ObjectType()
], PostObjectType);
exports.PostObjectType = PostObjectType;


/***/ }),

/***/ 113:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCommentArgsType = void 0;
const type_graphql_1 = __webpack_require__(885);
let CreateCommentArgsType = class CreateCommentArgsType {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateCommentArgsType.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreateCommentArgsType.prototype, "postId", void 0);
CreateCommentArgsType = __decorate([
    type_graphql_1.ArgsType()
], CreateCommentArgsType);
exports.CreateCommentArgsType = CreateCommentArgsType;


/***/ }),

/***/ 25:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePostArgsType = void 0;
const type_graphql_1 = __webpack_require__(885);
let CreatePostArgsType = class CreatePostArgsType {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreatePostArgsType.prototype, "description", void 0);
CreatePostArgsType = __decorate([
    type_graphql_1.ArgsType()
], CreatePostArgsType);
exports.CreatePostArgsType = CreatePostArgsType;


/***/ }),

/***/ 407:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginArgs = void 0;
const type_graphql_1 = __webpack_require__(885);
let LoginArgs = class LoginArgs {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginArgs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginArgs.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginArgs.prototype, "password", void 0);
LoginArgs = __decorate([
    type_graphql_1.ArgsType()
], LoginArgs);
exports.LoginArgs = LoginArgs;


/***/ }),

/***/ 487:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserArgs = void 0;
const class_validator_1 = __webpack_require__(516);
const type_graphql_1 = __webpack_require__(885);
const validateEmail_1 = __webpack_require__(686);
const validateUsername_1 = __webpack_require__(274);
let UserArgs = class UserArgs {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserArgs.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserArgs.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsEmail(),
    validateEmail_1.IsEmailAlreadyExist({ message: "email is already in use" }),
    __metadata("design:type", String)
], UserArgs.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserArgs.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    validateUsername_1.IsUsernameAlreadyExist({ message: "username is already in use" }),
    __metadata("design:type", String)
], UserArgs.prototype, "username", void 0);
UserArgs = __decorate([
    type_graphql_1.ArgsType()
], UserArgs);
exports.UserArgs = UserArgs;


/***/ }),

/***/ 841:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PublicKey = exports.PrivateKey = void 0;
exports.PrivateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBPAIBAAJBAMSP4b0xB6dSD4x9daueFuX560l9HRyWoeXAU1Va+ERcxYQOsjfm
YxKB2xeelK92ebcp1ui10hATvbZiBW3cxk8CAwEAAQJBAIFzZK6tkKXQNG9I3OsW
ZWw2CI/QdxCx35Oo8vjevWx/KRmEHBfwkUhKj9kdJgU/5mpc0WgWG4z5WdErnb9H
uLkCIQDgnXXKgC1FFn75eKt/hq3g5hKXDPgmVTPPl/S6ZnTMywIhAOAG9QUvGRuP
MmhpQnXOom/jrZXGBf++/1+EExvDXyANAiEAlfHHvoVOsz5PSW763ckkrmwooNmx
lrVuPvksEHtxIX0CIFzzhgY4nHpK1+dqhSDMM6mpFgTmvOZ4IQ1Ih4UlcvqhAiEA
pm52EInTb4kzL3SsJqgUwTjeFSTM7U1h29jAVL3iN28=
-----END RSA PRIVATE KEY-----`;
exports.PublicKey = `-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMSP4b0xB6dSD4x9daueFuX560l9HRyW
oeXAU1Va+ERcxYQOsjfmYxKB2xeelK92ebcp1ui10hATvbZiBW3cxk8CAwEAAQ==
-----END PUBLIC KEY-----`;


/***/ }),

/***/ 97:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SignOption = void 0;
exports.SignOption = {
    issuer: "",
    subject: "",
    audience: "",
    expiresIn: "365d",
    algorithm: "RS256"
};


/***/ }),

/***/ 686:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsEmailAlreadyExist = exports.IsEmailAlreadyExistConstraint = void 0;
const class_validator_1 = __webpack_require__(516);
const user_1 = __webpack_require__(287);
let IsEmailAlreadyExistConstraint = class IsEmailAlreadyExistConstraint {
    validate(email) {
        return user_1.User.findOne({ where: { email } }).then(user => {
            if (user)
                return false;
            return true;
        });
    }
};
IsEmailAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsEmailAlreadyExistConstraint);
exports.IsEmailAlreadyExistConstraint = IsEmailAlreadyExistConstraint;
function IsEmailAlreadyExist(validateOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validateOptions,
            constraints: [],
            validator: IsEmailAlreadyExistConstraint
        });
    };
}
exports.IsEmailAlreadyExist = IsEmailAlreadyExist;


/***/ }),

/***/ 274:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsUsernameAlreadyExist = exports.IsUsernameAlreadyExistConstraint = void 0;
const class_validator_1 = __webpack_require__(516);
const user_1 = __webpack_require__(287);
let IsUsernameAlreadyExistConstraint = class IsUsernameAlreadyExistConstraint {
    validate(username) {
        return user_1.User.findOne({ where: { username } }).then(user => {
            if (user)
                return false;
            return true;
        });
    }
};
IsUsernameAlreadyExistConstraint = __decorate([
    class_validator_1.ValidatorConstraint({ async: true })
], IsUsernameAlreadyExistConstraint);
exports.IsUsernameAlreadyExistConstraint = IsUsernameAlreadyExistConstraint;
function IsUsernameAlreadyExist(validateOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validateOptions,
            constraints: [],
            validator: IsUsernameAlreadyExistConstraint
        });
    };
}
exports.IsUsernameAlreadyExist = IsUsernameAlreadyExist;


/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("apollo-server");;

/***/ }),

/***/ 773:
/***/ ((module) => {

module.exports = require("bcryptjs");;

/***/ }),

/***/ 516:
/***/ ((module) => {

module.exports = require("class-validator");;

/***/ }),

/***/ 722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 906:
/***/ ((module) => {

module.exports = require("reflect-metadata");;

/***/ }),

/***/ 885:
/***/ ((module) => {

module.exports = require("type-graphql");;

/***/ }),

/***/ 794:
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__(607);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9BdXRob3JpemF0aW9uUmVvbHZlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9Db21tZW50UmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvUmVvbHZlcnMvUG9zdFJlc29sdmVyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Rlc3RSZW9sdmVyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1VzZXJSZXNvbHZlci50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9taWRkbGV3YXJlL2NoZWNrSW5wdXQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvVXNlci91c2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2VudGl0eS9PYmplY3RDb21tZW50LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9Db21tZW50SW5wdXQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0lucHV0UG9zdC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvVXNlckFyZ3MudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4va2V5cy50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBK0Q7QUFDL0QsMkNBQXdDO0FBQ3hDLDhDQUEwRDtBQUMxRCw2REFBOEI7QUFDOUIsd0NBQTBDO0FBRzFDLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBRXpCLEtBQUssQ0FBUyxXQUFzQjs7WUFDeEMsTUFBTSxPQUFPLEdBQUcsTUFBTSx1QkFBYSxDQUFDLFdBQUksQ0FBQyxDQUFDO1lBRTFDLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDbkMsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQztZQUN6QyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBRXpDLE1BQU0sU0FBUyxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFB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QzFCLFlBQVksRUFBRSxZQUFZO1lBQzFCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsU0FBUyxFQUFFLGdDQUFnQztTQUM5QyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7QUFDTixDQUFDO0FBVkQsd0RBVUM7Ozs7Ozs7O0FDMUJELDJDOzs7Ozs7O0FDQUEsc0M7Ozs7Ozs7QUNBQSw2Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsOEM7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLHFDOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7O1VDckJBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZ3MsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IExvZ2luQXJncyB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQXV0aG9yaXphdGlvblJlb2x2ZXIge1xuICBAUXVlcnkoKCkgPT4gVXNlcilcbiAgYXN5bmMgbG9naW4oQEFyZ3MoKSB0aGVQYXJhbWV0cjogTG9naW5BcmdzKTogUHJvbWlzZTxVc2VyIHwgbnVsbCB8IHZvaWQ+IHtcbiAgICBjb25zdCBUaGVVc2VyID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcblxuICAgIGNvbnN0IFRoZUVtYWlsID0gdGhlUGFyYW1ldHIuZW1haWw7XG4gICAgY29uc3QgVGhlVXNlcm5hbWUgPSB0aGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICBjb25zdCBUaGVQYXNzd29yZCA9IHRoZVBhcmFtZXRyLnBhc3N3b3JkO1xuXG4gICAgY29uc3QgRW1haWxGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWw6IFRoZUVtYWlsIH0gfSk7XG4gICAgY29uc3QgVXNlcm5hbWVGaW5kID0gYXdhaXQgVGhlVXNlci5maW5kT25lKHtcbiAgICAgIHdoZXJlOiB7IHVzZXJuYW1lOiBUaGVVc2VybmFtZSB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFFbWFpbEZpbmQgJiYgIVVzZXJuYW1lRmluZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKEVtYWlsRmluZCkge1xuICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICBUaGVQYXNzd29yZCxcbiAgICAgICAgRW1haWxGaW5kIS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBFbWFpbEZpbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFVzZXJuYW1lRmluZCkge1xuICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICBUaGVQYXNzd29yZCxcbiAgICAgICAgVXNlcm5hbWVGaW5kIS5wYXNzd29yZFxuICAgICAgKTtcbiAgICAgIGlmICghUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVc2VybmFtZUZpbmQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBBcmcsIEFyZ3MsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuLi90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudFwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IENyZWF0ZUNvbW1lbnRBcmdzVHlwZSB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvQ29tbWVudElucHV0XCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQ29tbWVudHNSZW9sdmVyIHtcbiAgLy9cblxuICBATXV0YXRpb24oKCkgPT4gT2JqZWN0Q29tbWVudCwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBjcmVhdGVDb21tZW50KEBBcmdzKCkgc2luZ2xlUGFyOiBDcmVhdGVDb21tZW50QXJnc1R5cGUpIHtcbiAgICBjb25zdCByZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICBjb25zdCBwb3N0T2JqID0gYXdhaXQgcmVwLmZpbmRPbmUoeyBpZDogc2luZ2xlUGFyLnBvc3RJZCB9KTtcbiAgICBjb25zb2xlLmxvZyhwb3N0T2JqKTtcbiAgICBpZiAoIXBvc3RPYmopIHJldHVybjtcbiAgICBjb25zdCBjb21tZW50T2JqID0gbmV3IE9iamVjdENvbW1lbnQoc2luZ2xlUGFyLmRlc2NyaXB0aW9uLCBwb3N0T2JqKTtcbiAgICBjb21tZW50T2JqLnBvc3QgPSBwb3N0T2JqO1xuICAgIGF3YWl0IGNvbW1lbnRPYmouc2F2ZSgpO1xuXG4gICAgaWYgKHBvc3RPYmouY29tbWVudHMgPT0gdW5kZWZpbmVkIHx8IHBvc3RPYmouY29tbWVudHMgPT0gbnVsbCkge1xuICAgICAgcG9zdE9iai5jb21tZW50cyA9IFtdO1xuICAgIH1cbiAgICBwb3N0T2JqLmNvbW1lbnRzLnB1c2goY29tbWVudE9iaik7XG4gICAgYXdhaXQgcG9zdE9iai5zYXZlKCk7XG4gICAgcmV0dXJuIGNvbW1lbnRPYmo7XG4gIH1cblxuICBAUXVlcnkoKCkgPT4gW09iamVjdENvbW1lbnRdLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGdldENvbW1lbnRzKFxuICAgIEBBcmcoXCJpZFwiKSBwb3N0SWQ6IHN0cmluZ1xuICApOiBQcm9taXNlPE9iamVjdENvbW1lbnRbXSB8IG51bGwgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBwb3N0UmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShQb3N0T2JqZWN0VHlwZSk7XG4gICAgY29uc3QgY29tbWVudFJlcCA9IGF3YWl0IGdldFJlcG9zaXRvcnkoT2JqZWN0Q29tbWVudCk7XG5cbiAgICBjb25zdCBwb3N0T2JqID0gYXdhaXQgY29tbWVudFJlcC5maW5kQW5kQ291bnQoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgcG9zdDogcG9zdElkLFxuICAgICAgICAvLyBhd2FpdCBwb3N0UmVwLmZpbmRPbmUoeyBpZDogcG9zdElkIH0pLFxuICAgICAgfSxcbiAgICAgIHRha2U6IDUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcG9zdE9ialswXTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQXJnLFxuICBBcmdzLFxuICBDdHgsXG4gIC8vIEFyZ3MsXG4gIE11dGF0aW9uLFxuICBRdWVyeSxcbiAgUmVzb2x2ZXIsXG4gIFVzZU1pZGRsZXdhcmUsXG4gIC8vIFVzZU1pZGRsZXdhcmUsXG59IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdEFyZ3NUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9JbnB1dFBvc3RcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuXG4vLyBpbXBvcnQgeyBMb2dBY2Nlc3MgfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5cbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gXCIuLi9taWRkbGV3YXJlL2NoZWNrSW5wdXRcIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi90eXBlcy9jb250ZXh0L015Q29udGV4dFwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFBvc3RSZXNvbHZlciB7XG4gIEBVc2VNaWRkbGV3YXJlKGlzQXV0aClcbiAgQE11dGF0aW9uKCgpID0+IFBvc3RPYmplY3RUeXBlLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGFzeW5jIGNyZWF0ZVBvc3QoXG4gICAgQEFyZ3MoKSBzaW5nbGVQYXJhbWV0cjogQ3JlYXRlUG9zdEFyZ3NUeXBlXG4gICk6IFByb21pc2U8UG9zdE9iamVjdFR5cGUgfCBudWxsPiB7XG4gICAgY29uc3QgcmV0dXJuUG9zdCA9IG5ldyBQb3N0T2JqZWN0VHlwZSgpO1xuICAgIHJldHVyblBvc3QuZGVzY3JpcHRpb24gPSBzaW5nbGVQYXJhbWV0ci5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBwb3N0UmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShQb3N0T2JqZWN0VHlwZSk7XG5cbiAgICBhd2FpdCBwb3N0UmVwLnNhdmUocmV0dXJuUG9zdCk7XG4gICAgcmV0dXJuIHJldHVyblBvc3Q7XG4gIH1cblxuICBAVXNlTWlkZGxld2FyZShpc0F1dGgpXG4gIEBRdWVyeSgoKSA9PiBQb3N0T2JqZWN0VHlwZSwgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhc3luYyBnZXRQb3N0KEBBcmcoXCJpZFwiKSBpZDogc3RyaW5nKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcG9zdFJlcC5maW5kT25lKHsgaWQgfSk7XG5cbiAgICBjb25zdCBwb3N0T2JqID0gYXdhaXQgcG9zdFJlcFxuICAgICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcInBvc3RcIilcbiAgICAgIC5sZWZ0Sm9pbkFuZFNlbGVjdChcInBvc3QuY29tbWVudHNcIiwgXCJjb21tZW50XCIpXG4gICAgICAud2hlcmUoXCJwb3N0LmlkID0gOmlkXCIsIHsgaWQgfSlcbiAgICAgIC5nZXRPbmUoKTtcbiAgICAvLyBjb25zdCByZWwgPSBhd2FpdCBwb3N0UmVwLmZpbmRPbmUoeyBpZCwgcmVsYXRpb25zOiBbXCJjb21tZW50c1wiXSB9KTtcbiAgICBjb25zb2xlLmxvZyhwb3N0T2JqKTtcbiAgICByZXR1cm4gcG9zdDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUXVlcnksIFJlc29sdmVyIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFRlc3RSZXNvbHZlciB7XG4gIEBRdWVyeSgoKSA9PiBTdHJpbmcpXG4gIGFzeW5jIGhlbGxvV29ybGQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gXCJIZWxsbyBXb3JsZCFcIjtcbiAgfVxufVxuIiwiaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IEFyZ3MsIE11dGF0aW9uLCBSZXNvbHZlciwgVXNlTWlkZGxld2FyZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuLy8gaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvTXlDb250ZXh0XCI7XG5pbXBvcnQgeyBVc2VyQXJncyB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvVXNlckFyZ3NcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBQcml2YXRlS2V5LCBQdWJsaWNLZXkgfSBmcm9tIFwiLi4vdXRpbGl0ZXMvdG9rZW4va2V5c1wiO1xuaW1wb3J0IHsgU2lnbk9wdGlvbiB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvY2hlY2tJbnB1dFwiO1xuXG5AUmVzb2x2ZXIoKVxuZXhwb3J0IGNsYXNzIFVzZXJSZXNvbHZlciB7XG4gIEBNdXRhdGlvbigoKSA9PiBTdHJpbmcpXG4gIGFzeW5jIHJlZ2lzdGVyKEBBcmdzKCkgc2luZ2xlUGFyYW1ldHI6IFVzZXJBcmdzKTogUHJvbWlzZTxTdHJpbmcgfCB2b2lkPiB7XG4gICAgY29uc3QgcmV0dXJuVXNlciA9IG5ldyBVc2VyKCk7XG4gICAgcmV0dXJuVXNlci5maXJzdE5hbWUgPSBzaW5nbGVQYXJhbWV0ci5maXJzdE5hbWU7XG4gICAgcmV0dXJuVXNlci5sYXN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmxhc3ROYW1lO1xuICAgIHJldHVyblVzZXIuZW1haWwgPSBzaW5nbGVQYXJhbWV0ci5lbWFpbDtcblxuICAgIHJldHVyblVzZXIucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChzaW5nbGVQYXJhbWV0ci5wYXNzd29yZCwgMTIpO1xuICAgIHJldHVyblVzZXIudXNlcm5hbWUgPSBzaW5nbGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICBjb25zdCB0b2tlblVzZXIgPSBqd3Quc2lnbihcbiAgICAgIHtcbiAgICAgICAgaWQ6IHJldHVyblVzZXIuaWQsXG4gICAgICAgIGZpcnN0TmFtZTogcmV0dXJuVXNlci5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOiByZXR1cm5Vc2VyLmxhc3ROYW1lLFxuICAgICAgICBlbWFpbDogcmV0dXJuVXNlci5lbWFpbCxcbiAgICAgICAgdXNlcm5hbWU6IHJldHVyblVzZXIudXNlcm5hbWUsXG4gICAgICB9LFxuICAgICAgUHJpdmF0ZUtleSxcbiAgICAgIFNpZ25PcHRpb25cbiAgICApO1xuICAgIHJldHVyblVzZXIudG9rZW4gPSB0b2tlblVzZXI7XG4gICAgYXdhaXQgcmV0dXJuVXNlci5zYXZlKCk7XG4gICAgcmV0dXJuIHRva2VuVXNlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWEgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5cbmltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IFVzZXJSZXNvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL1VzZXJSZXNvbHZlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3R5cGVzL1VzZXIvdXNlclwiO1xuXG5pbXBvcnQgeyBBdXRob3JpemF0aW9uUmVvbHZlciB9IGZyb20gXCIuL1Jlb2x2ZXJzL0F1dGhvcml6YXRpb25SZW9sdmVyXCI7XG5cbmltcG9ydCB7IE9iamVjdENvbW1lbnQgfSBmcm9tIFwiLi90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudFwiO1xuaW1wb3J0IHsgaXNBdXRoIH0gZnJvbSBcIi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgUG9zdFJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvUG9zdFJlc29sdmVyXCI7XG5pbXBvcnQgeyBUZXN0UmVzb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9UZXN0UmVvbHZlclwiO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gXCJpb3JlZGlzXCI7XG5pbXBvcnQgeyBDb21tZW50c1Jlb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9Db21tZW50UmVzb2x2ZXJcIjtcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDA0MDtcblxuYXN5bmMgZnVuY3Rpb24gQm9vdHN0cmFwKCkge1xuICBjb25zdCBjb25uZWN0aW9uUG9zdCA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIG5hbWU6IFwiZGVmYXVsdFwiLFxuICAgIHR5cGU6IFwicG9zdGdyZXNcIixcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgdXNlcm5hbWU6IFwiaGVsbG9taWtcIixcbiAgICBwYXNzd29yZDogXCIyMTA2XCIsXG4gICAgZGF0YWJhc2U6IFwicG9zdHNcIixcbiAgICBzeW5jaHJvbml6ZTogdHJ1ZSxcbiAgICBsb2dnaW5nOiB0cnVlLFxuICAgIGVudGl0aWVzOiBbUG9zdE9iamVjdFR5cGUsIFVzZXIsIE9iamVjdENvbW1lbnRdLFxuICB9KTtcblxuICBjb25zdCBzY2hlbWEgPSBhd2FpdCBidWlsZFNjaGVtYSh7XG4gICAgcmVzb2x2ZXJzOiBbXG4gICAgICBUZXN0UmVzb2x2ZXIsXG4gICAgICBDb21tZW50c1Jlb2x2ZXIsXG4gICAgICBVc2VyUmVzb2x2ZXIsXG4gICAgICBBdXRob3JpemF0aW9uUmVvbHZlcixcbiAgICAgIFBvc3RSZXNvbHZlcixcbiAgICBdLFxuICAgIGdsb2JhbE1pZGRsZXdhcmVzOiBbaXNBdXRoXSxcbiAgfSk7XG5cbiAgY29uc3QgcHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcblxuICBjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcbiAgICBzY2hlbWE6IHNjaGVtYSxcbiAgICBwbGF5Z3JvdW5kOiB0cnVlLFxuICAgIC8vIGNvbnRleHQ6ICh7IHJlcSB9KSA9PiB7XG4gICAgLy8gICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgXCJcIjtcblxuICAgIC8vICAgY29uc3QgdXNlciA9IGp3dC5kZWNvZGUodG9rZW4pO1xuXG4gICAgLy8gICBpZiAoIXVzZXIpIHRocm93IG5ldyBFcnJvcihcInlvdSBtdXN0IGJlIGxvZ2dlZCBpblwiKTtcblxuICAgIC8vICAgcmV0dXJuIHsgdXNlciB9O1xuICAgIC8vIH0sXG4gIH0pO1xuXG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHN0YXJ0ZWQsIGJpdGNoXCIpO1xuICB9KTtcblxuICAvLyBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgc2VydmVyLmxpc3RlbihQT1JUKTtcbiAgLy8gY29uc29sZS5sb2coXCJTRVJWRUVSIFNUQVJURURcIik7XG59XG5cbkJvb3RzdHJhcCgpO1xuIiwiaW1wb3J0IHsgTWlkZGxld2FyZUZuIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi90eXBlcy9jb250ZXh0L015Q29udGV4dFwiO1xuaW1wb3J0IHsgUHJpdmF0ZUtleSwgUHVibGljS2V5IH0gZnJvbSBcIi4uL3V0aWxpdGVzL3Rva2VuL2tleXNcIjtcblxuLy8gZXhwb3J0IGNvbnN0IExvZ0FjY2VzczogTWlkZGxld2FyZUZuID0gKHsgY29udGV4dCwgaW5mbyB9LCBuZXh0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGluZm8pO1xuLy8gICBjb25zdCB0b2tlbiA9IChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbi8vICAgY29uc29sZS5sb2coand0LmRlY29kZSgoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pKTtcbi8vICAgY29uc29sZS5sb2coKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKTtcbi8vICAgcmV0dXJuIG5leHQoKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBpc0F1dGg6IE1pZGRsZXdhcmVGbjxNeUNvbnRleHQ+ID0gYXN5bmMgKFxuICB7IGluZm8sIGNvbnRleHQgfSxcbiAgbmV4dFxuKSA9PiB7XG4gIC8vIGlmIChpbmZvLmZpZWxkTmFtZSA9PSBcIkxvZ2luXCIgfHwgaW5mby5maWVsZE5hbWUgPT0gXCJyZWdpc3RlclwiKSB7XG4gIC8vICAgcmV0dXJuIG5leHQoKTtcbiAgLy8gfVxuXG4gIC8vIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlci5hdXRob3JpemF0aW9uKTtcbiAgLy8gY29uc29sZS5sb2coand0LmRlY29kZSgoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXIuYXV0aG9yaXphdGlvbikpO1xuICAvLyBpZiAoIWp3dC52ZXJpZnkoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVyLmF1dGhvcml6YXRpb24sIFB1YmxpY0tleSkpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF1dGhvcml6YXRpb24nKTtcbiAgLy8gfVxuXG4gIHJldHVybiBuZXh0KCk7XG59O1xuIiwiaW1wb3J0IHsgUmVwbGFjZUZpZWxkV2l0aEZyYWdtZW50IH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IEZpZWxkLCBJRCwgT2JqZWN0VHlwZSwgUm9vdCB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7XG4gIEJhc2VFbnRpdHksXG4gIENvbHVtbixcbiAgRW50aXR5LFxuICBPbmVUb01hbnksXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuLi9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gIEBGaWVsZCgoKSA9PiBJRClcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gIGlkITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oKVxuICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBDb2x1bW4oXCJ0ZXh0XCIsIHsgdW5pcXVlOiB0cnVlIH0pXG4gIGVtYWlsITogc3RyaW5nO1xuXG4gIC8vIEBGaWVsZCgpXG4gIEBDb2x1bW4oKVxuICBwYXNzd29yZCE6IHN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKClcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIHRva2VuITogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRmllbGQsIElELCBPYmplY3RUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHtcbiAgQmFzZUVudGl0eSxcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvTWFueSxcbiAgTWFueVRvT25lLFxuICBQcmltYXJ5Q29sdW1uLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4vT2JqZWN0UG9zdFwiO1xuXG5ARW50aXR5KFwiY29tbWVudFwiKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIE9iamVjdENvbW1lbnQgZXh0ZW5kcyBCYXNlRW50aXR5IHtcbiAgQEZpZWxkKCgpID0+IElEKVxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgaWQhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQENvbHVtbigpXG4gIGJvZHkhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKCgpID0+IFBvc3RPYmplY3RUeXBlKVxuICBATWFueVRvT25lKCgpID0+IFBvc3RPYmplY3RUeXBlLCAocG9zdDogUG9zdE9iamVjdFR5cGUpID0+IHBvc3QuY29tbWVudHMpXG4gIHBvc3Q/OiBQb3N0T2JqZWN0VHlwZTtcblxuICBjb25zdHJ1Y3Rvcihib2R5Pzogc3RyaW5nLCBwb3N0PzogUG9zdE9iamVjdFR5cGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuYm9keSA9IGJvZHkgfHwgXCJcIjtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICB9XG59XG4iLCJpbXBvcnQgeyBPYmplY3RUeXBlLCBJRCwgRmllbGQgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQge1xuICBCYXNlRW50aXR5LFxuICBDb2x1bW4sXG4gIEVudGl0eSxcbiAgSm9pbkNvbHVtbixcbiAgSm9pblRhYmxlLFxuICBNYW55VG9PbmUsXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuL09iamVjdENvbW1lbnRcIjtcblxuQEVudGl0eShcInBvc3RcIilcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBQb3N0T2JqZWN0VHlwZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuICBARmllbGQoKCkgPT4gSUQpXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICBpZCE6IFN0cmluZztcblxuICBARmllbGQoKVxuICBAQ29sdW1uKHsgdHlwZTogXCJ0ZXh0XCIgfSlcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBPYmplY3RDb21tZW50LCAoY29tbWVudHM6IE9iamVjdENvbW1lbnQpID0+IGNvbW1lbnRzLnBvc3QpXG4gIGNvbW1lbnRzITogT2JqZWN0Q29tbWVudFtdO1xuXG4gIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBpc0FjdGl2ZT86IGJvb2xlYW47XG5cbiAgLy8gQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIC8vIEBNYW55VG9PbmUoKCkgPT4gVXNlciwgKHVzZXI6IFVzZXIpID0+IHVzZXIucG9zdHMpXG4gIC8vIHVzZXI/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBBcmdzVHlwZSwgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbi8vIGltcG9ydCB7IFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuXG4vLyBARW50aXR5KClcbkBBcmdzVHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tbWVudEFyZ3NUeXBlIHtcbiAgQEZpZWxkKClcbiAgZGVzY3JpcHRpb24hOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgcG9zdElkITogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXJnc1R5cGUsIEZpZWxkLCBJbnB1dFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG4vLyBpbXBvcnQgeyBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuLy8gQEVudGl0eSgpXG5AQXJnc1R5cGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZVBvc3RBcmdzVHlwZSB7XG4gIEBGaWVsZCgpXG4gIGRlc2NyaXB0aW9uITogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgQXJnc1R5cGUsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuXG5AQXJnc1R5cGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luQXJncyB7XG4gIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGVtYWlsPzogc3RyaW5nO1xuXG4gIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gIHVzZXJuYW1lPzogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIHBhc3N3b3JkITogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSXNFbWFpbCwgTGVuZ3RoIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQXJnc1R5cGUsIEZpZWxkIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0IHsgSXNFbWFpbEFscmVhZHlFeGlzdCB9IGZyb20gXCIuLi8uLi92YWxpZGF0ZS92YWxpZGF0ZUVtYWlsXCI7XG5pbXBvcnQgeyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0IH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRlL3ZhbGlkYXRlVXNlcm5hbWVcIjtcblxuQEFyZ3NUeXBlKClcbmV4cG9ydCBjbGFzcyBVc2VyQXJncyB7XG4gIEBGaWVsZCgpXG4gIEBMZW5ndGgoMSwgMTAwKVxuICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQExlbmd0aCgxLCAxMDApXG4gIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gIEBGaWVsZCgpXG4gIEBJc0VtYWlsKClcbiAgQElzRW1haWxBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcImVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIgfSlcbiAgZW1haWwhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgcGFzc3dvcmQhOiBzdHJpbmc7XG5cbiAgQEZpZWxkKClcbiAgQElzVXNlcm5hbWVBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcInVzZXJuYW1lIGlzIGFscmVhZHkgaW4gdXNlXCIgfSlcbiAgdXNlcm5hbWUhOiBzdHJpbmc7XG59XG4iLCJcblxuZXhwb3J0IGNvbnN0IFByaXZhdGVLZXkgID0gICBgLS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLVxuTUlJQlBBSUJBQUpCQU1TUDRiMHhCNmRTRDR4OWRhdWVGdVg1NjBsOUhSeVdvZVhBVTFWYStFUmN4WVFPc2pmbVxuWXhLQjJ4ZWVsSzkyZWJjcDF1aTEwaEFUdmJaaUJXM2N4azhDQXdFQUFRSkJBSUZ6Wks2dGtLWFFORzlJM09zV1xuWld3MkNJL1FkeEN4MzVPbzh2amV2V3gvS1JtRUhCZndrVWhLajlrZEpnVS81bXBjMFdnV0c0ejVXZEVybmI5SFxudUxrQ0lRRGduWFhLZ0MxRkZuNzVlS3QvaHEzZzVoS1hEUGdtVlRQUGwvUzZablRNeXdJaEFPQUc5UVV2R1J1UFxuTW1ocFFuWE9vbS9qclpYR0JmKysvMStFRXh2RFh5QU5BaUVBbGZISHZvVk9zejVQU1c3NjNja2tybXdvb05teFxubHJWdVB2a3NFSHR4SVgwQ0lGenpoZ1k0bkhwSzErZHFoU0RNTTZtcEZnVG12T1o0SVExSWg0VWxjdnFoQWlFQVxucG01MkVJblRiNGt6TDNTc0pxZ1V3VGplRlNUTTdVMWgyOWpBVkwzaU4yOD1cbi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tYDtcblxuZXhwb3J0IGNvbnN0IFB1YmxpY0tleSA9IGAtLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxuTUZ3d0RRWUpLb1pJaHZjTkFRRUJCUUFEU3dBd1NBSkJBTVNQNGIweEI2ZFNENHg5ZGF1ZUZ1WDU2MGw5SFJ5V1xub2VYQVUxVmErRVJjeFlRT3NqZm1ZeEtCMnhlZWxLOTJlYmNwMXVpMTBoQVR2YlppQlczY3hrOENBd0VBQVE9PVxuLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tYCIsImltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cbmV4cG9ydCB2YXIgU2lnbk9wdGlvbiA6and0LlNpZ25PcHRpb25zPSB7XG4gICAgaXNzdWVyOiBcIlwiLFxuICAgIHN1YmplY3Q6XCJcIixcbiAgICBhdWRpZW5jZTogXCJcIixcbiAgICBleHBpcmVzSW46IFwiMzY1ZFwiLFxuICAgIGFsZ29yaXRobTogXCJSUzI1NlwiXG59OyIsImltcG9ydCB7IHJlZ2lzdGVyRGVjb3JhdG9yLCBWYWxpZGF0aW9uT3B0aW9ucywgVmFsaWRhdG9yQ29uc3RyYWludCwgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG4vLyBpbXBvcnQgeyBQb3N0T2JqZWN0VHlwZSB9IGZyb20gXCIuLi9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuIFxuIFxuLy8gQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuLy8gZXhwb3J0IGNsYXNzIEZpbmFsT3duZXJJZFxuLy8gICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4vLyAgICAgLy8gdmFsaWRhdGUoX293bmVySWQ6IHN0cmluZyk6IFByb21pc2U8UG9zdE9iamVjdFR5cGUgfCBudWxsPiB7XG4vLyAgICAgLy8gICAgIHJldHVybiBcbi8vICAgICAvLyB9XG4vLyB9XG5cbkBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBJc0VtYWlsQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4gICAgdmFsaWRhdGUoZW1haWw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWwgfSB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc0VtYWlsQWxyZWFkeUV4aXN0KHZhbGlkYXRlT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgICByZWdpc3RlckRlY29yYXRvcih7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogdmFsaWRhdGVPcHRpb25zLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiBJc0VtYWlsQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgICAgICB9KTtcbiAgICB9O1xuXG5cbn0iLCJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbk9wdGlvbnMsIFZhbGlkYXRvckNvbnN0cmFpbnQsIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2UgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuXG5cblxuQFZhbGlkYXRvckNvbnN0cmFpbnQoeyBhc3luYzogdHJ1ZSB9KVxuZXhwb3J0IGNsYXNzIElzVXNlcm5hbWVBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgaW1wbGVtZW50cyBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIHtcbiAgICB2YWxpZGF0ZSh1c2VybmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVc2VyLmZpbmRPbmUoeyB3aGVyZTogeyB1c2VybmFtZSB9IH0pLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIElzVXNlcm5hbWVBbHJlYWR5RXhpc3QodmFsaWRhdGVPcHRpb25zPzogVmFsaWRhdGlvbk9wdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHJlZ2lzdGVyRGVjb3JhdG9yKHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICBvcHRpb25zOiB2YWxpZGF0ZU9wdGlvbnMsXG4gICAgICAgICAgICBjb25zdHJhaW50czogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IElzVXNlcm5hbWVBbHJlYWR5RXhpc3RDb25zdHJhaW50XG4gICAgICAgIH0pO1xuICAgIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0anNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlLWdyYXBocWxcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR5cGVvcm1cIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwic291cmNlUm9vdCI6IiJ9