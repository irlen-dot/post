/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 939:
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
exports.CheckLogin = void 0;
const type_graphql_1 = __webpack_require__(885);
const typeorm_1 = __webpack_require__(794);
const LoginInput_1 = __webpack_require__(407);
const bcryptjs_1 = __importDefault(__webpack_require__(773));
const user_1 = __webpack_require__(287);
let CheckLogin = class CheckLogin {
    Login(theParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const TheUser = yield typeorm_1.getRepository(user_1.User);
            const TheEmail = theParametr.email;
            const TheUsername = theParametr.username;
            const ThePassword = theParametr.password;
            const EmailFind = yield TheUser.findOne({ where: { email: TheEmail } });
            const UsernameFind = yield TheUser.findOne({ where: { username: TheUsername } });
            console.log('EmailFind', EmailFind);
            console.log('UsernameFind', UsernameFind);
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
    type_graphql_1.Mutation(() => user_1.User),
    __param(0, type_graphql_1.Arg("LoginData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput_1.LoginInput]),
    __metadata("design:returntype", Promise)
], CheckLogin.prototype, "Login", null);
CheckLogin = __decorate([
    type_graphql_1.Resolver()
], CheckLogin);
exports.CheckLogin = CheckLogin;


/***/ }),

/***/ 969:
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
exports.ResolveComment = void 0;
const type_graphql_1 = __webpack_require__(885);
const InputComment_1 = __webpack_require__(648);
const ObjectComment_1 = __webpack_require__(606);
const ObjectPost_1 = __webpack_require__(685);
let ResolveComment = class ResolveComment {
    Hi() {
        return __awaiter(this, void 0, void 0, function* () {
            return "Hi";
        });
    }
    CommentResolver(SingleParametr, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const ComObj = new ObjectComment_1.ObjectComment();
            const PostObj = new ObjectPost_1.PostObjectType();
            console.log(ctx);
            ComObj.user = ctx.username;
            ComObj.body = SingleParametr.body;
            yield ComObj.save();
            PostObj.comments = [ComObj];
            yield PostObj.save();
            return ComObj;
        });
    }
};
__decorate([
    type_graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResolveComment.prototype, "Hi", null);
__decorate([
    type_graphql_1.Mutation(() => ObjectComment_1.ObjectComment),
    __param(0, type_graphql_1.Arg("DataComment")),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputComment_1.InputComment, Object]),
    __metadata("design:returntype", Promise)
], ResolveComment.prototype, "CommentResolver", null);
ResolveComment = __decorate([
    type_graphql_1.Resolver()
], ResolveComment);
exports.ResolveComment = ResolveComment;
``;


/***/ }),

/***/ 205:
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
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
    saas(singleParametr) {
        return __awaiter(this, void 0, void 0, function* () {
            const returnPost = new ObjectPost_1.PostObjectType();
            returnPost.description = singleParametr.description;
            const postRep = yield typeorm_1.getRepository(ObjectPost_1.PostObjectType);
            yield postRep.save(returnPost);
            return returnPost;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "HelloBitch", null);
__decorate([
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Mutation(() => ObjectPost_1.PostObjectType, { name: "createPostByInput", nullable: true }),
    __param(0, type_graphql_1.Arg("singleParametr")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [InputPost_1.CreatePostInput]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "saas", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;


/***/ }),

/***/ 454:
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
const inputUser_1 = __webpack_require__(630);
const user_1 = __webpack_require__(287);
const keys_1 = __webpack_require__(841);
const signOption_1 = __webpack_require__(97);
const jwt = __importStar(__webpack_require__(722));
const checkInput_1 = __webpack_require__(940);
let UserResolver = class UserResolver {
    HelloBitch() {
        return __awaiter(this, void 0, void 0, function* () {
            return "HiBitch";
        });
    }
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
    type_graphql_1.UseMiddleware(checkInput_1.isAuth),
    type_graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "HelloBitch", null);
__decorate([
    type_graphql_1.Mutation(),
    __param(0, type_graphql_1.Arg("UserData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inputUser_1.UserInput]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;


/***/ }),

/***/ 607:
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
__webpack_require__(906);
const type_graphql_1 = __webpack_require__(885);
const ResolvePost_1 = __webpack_require__(205);
const apollo_server_1 = __webpack_require__(232);
const typeorm_1 = __webpack_require__(794);
const ObjectPost_1 = __webpack_require__(685);
const ResolveUser_1 = __webpack_require__(454);
const user_1 = __webpack_require__(287);
const CheckLogin_1 = __webpack_require__(939);
const ResolveComment_1 = __webpack_require__(969);
const ObjectComment_1 = __webpack_require__(606);
const checkInput_1 = __webpack_require__(940);
const jwt = __importStar(__webpack_require__(722));
const PORT = process.env.PORT || 4040;
function Bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionPost = yield typeorm_1.createConnection({
            name: "default",
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "irlenturlykhanov",
            password: "1234",
            database: "posts",
            synchronize: true,
            logging: true,
            entities: [ObjectPost_1.PostObjectType, user_1.User, ObjectComment_1.ObjectComment],
        });
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [ResolvePost_1.PostResolver, ResolveUser_1.UserResolver, CheckLogin_1.CheckLogin, ResolveComment_1.ResolveComment],
            globalMiddlewares: [checkInput_1.isAuth]
        });
        const production = "production" === "production";
        const server = new apollo_server_1.ApolloServer({
            schema: schema,
            playground: true,
            context: ({ req }) => {
                const token = req.headers.authorization || '';
                const user = jwt.decode(token);
                if (!user)
                    throw new Error('you must be logged in');
                return { user };
            },
        });
        server.listen(PORT, () => {
            console.log("Server started, bitch");
        });
    });
}
Bootstrap();


/***/ }),

/***/ 940:
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.isAuth = void 0;
const jwt = __importStar(__webpack_require__(722));
const isAuth = ({ info, context }, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(info);
    console.log(info.fieldName);
    const teok = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MmEwYmM4LTJiMDUtNDZkNS05MjgwLWIzMGQxNmI4MThjZCIsImZpcnN0TmFtZSI6IkxBTiIsImxhc3ROYW1lIjoiQVQiLCJlbWFpbCI6ImhlbG9taWsxMUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6Imxsb20xMSIsImlhdCI6MTYwODU1NDU5NywiZXhwIjoxNjQwMDkwNTk3LCJhdWQiOiIiLCJpc3MiOiIiLCJzdWIiOiIifQ.FuhfkuNuVuHM-9eru0uAst6PPWTPWfYRADVqwwpnfz9bC5JLuVffLZqBP7ZyiILk4u_dCPYu6dCQSgpXG0P-lg';
    console.log(jwt.decode(teok));
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
const ObjectPost_1 = __webpack_require__(685);
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
    type_graphql_1.Field(() => [ObjectPost_1.PostObjectType]),
    typeorm_1.OneToMany('PostObjectType', (post) => post.user),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
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
};
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.PostObjectType),
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    typeorm_1.ManyToOne(() => ObjectPost_1.PostObjectType, (commentId) => commentId.comments),
    typeorm_1.JoinColumn(),
    __metadata("design:type", ObjectPost_1.PostObjectType)
], ObjectComment.prototype, "CommentId", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.ManyToOne('User', (user) => user.username),
    __metadata("design:type", String)
], ObjectComment.prototype, "user", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], ObjectComment.prototype, "body", void 0);
__decorate([
    type_graphql_1.Field(() => ObjectPost_1.PostObjectType),
    typeorm_1.ManyToOne(() => ObjectPost_1.PostObjectType, (post) => post.id),
    __metadata("design:type", ObjectPost_1.PostObjectType)
], ObjectComment.prototype, "PostId", void 0);
ObjectComment = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
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
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], PostObjectType.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], PostObjectType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(() => ObjectComment_1.ObjectComment, (comments) => comments.CommentId),
    __metadata("design:type", Array)
], PostObjectType.prototype, "comments", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PostObjectType.prototype, "likes", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PostObjectType.prototype, "isActive", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.ManyToOne('User', (user) => user.id),
    __metadata("design:type", String)
], PostObjectType.prototype, "ownerId", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    typeorm_1.ManyToOne('User', (user) => user.posts),
    __metadata("design:type", String)
], PostObjectType.prototype, "user", void 0);
PostObjectType = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], PostObjectType);
exports.PostObjectType = PostObjectType;


/***/ }),

/***/ 648:
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
exports.InputComment = void 0;
const type_graphql_1 = __webpack_require__(885);
let InputComment = class InputComment {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], InputComment.prototype, "body", void 0);
InputComment = __decorate([
    type_graphql_1.InputType()
], InputComment);
exports.InputComment = InputComment;


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
exports.CreatePostInput = void 0;
const type_graphql_1 = __webpack_require__(885);
let CreatePostInput = class CreatePostInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], CreatePostInput.prototype, "description", void 0);
CreatePostInput = __decorate([
    type_graphql_1.InputType()
], CreatePostInput);
exports.CreatePostInput = CreatePostInput;


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
exports.LoginInput = void 0;
const type_graphql_1 = __webpack_require__(885);
let LoginInput = class LoginInput {
};
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], LoginInput.prototype, "username", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginInput.prototype, "password", void 0);
LoginInput = __decorate([
    type_graphql_1.InputType()
], LoginInput);
exports.LoginInput = LoginInput;


/***/ }),

/***/ 630:
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
exports.UserInput = void 0;
const class_validator_1 = __webpack_require__(516);
const type_graphql_1 = __webpack_require__(885);
const validateEmail_1 = __webpack_require__(686);
const validateUsername_1 = __webpack_require__(274);
let UserInput = class UserInput {
};
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserInput.prototype, "firstName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.Length(1, 100),
    __metadata("design:type", String)
], UserInput.prototype, "lastName", void 0);
__decorate([
    type_graphql_1.Field(),
    class_validator_1.IsEmail(),
    validateEmail_1.IsEmailAlreadyExist({ message: "email is already in use" }),
    __metadata("design:type", String)
], UserInput.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], UserInput.prototype, "password", void 0);
__decorate([
    type_graphql_1.Field(),
    validateUsername_1.IsUsernameAlreadyExist({ message: "username is already in use" }),
    __metadata("design:type", String)
], UserInput.prototype, "username", void 0);
UserInput = __decorate([
    type_graphql_1.InputType()
], UserInput);
exports.UserInput = UserInput;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy9SZW9sdmVycy9DaGVja0xvZ2luLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVDb21tZW50LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL1Jlb2x2ZXJzL1Jlc29sdmVVc2VyLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL21pZGRsZXdhcmUvY2hlY2tJbnB1dC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9Vc2VyL3VzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdENvbW1lbnQudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvZW50aXR5L09iamVjdFBvc3QudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdHlwZXMvaW5wdXRUeXBlL0lucHV0Q29tbWVudC50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy90eXBlcy9pbnB1dFR5cGUvSW5wdXRQb3N0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9Mb2dpbklucHV0LnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3R5cGVzL2lucHV0VHlwZS9pbnB1dFVzZXIudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdXRpbGl0ZXMvdG9rZW4va2V5cy50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC8uL3NyYy91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uLnRzIiwid2VicGFjazovL2NvcHlzaGl0Ly4vc3JjL3ZhbGlkYXRlL3ZhbGlkYXRlRW1haWwudHMiLCJ3ZWJwYWNrOi8vY29weXNoaXQvLi9zcmMvdmFsaWRhdGUvdmFsaWRhdGVVc2VybmFtZS50cyIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXJcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImJjcnlwdGpzXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9jb3B5c2hpdC9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwicmVmbGVjdC1tZXRhZGF0YVwiIiwid2VicGFjazovL2NvcHlzaGl0L2V4dGVybmFsIFwidHlwZS1ncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvZXh0ZXJuYWwgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29weXNoaXQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBNkU7QUFDN0UsMkNBQXdDO0FBQ3hDLDhDQUEyRDtBQUMzRCw2REFBOEI7QUFDOUIsd0NBQTBDO0FBRzFDLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVU7SUFlYixLQUFLLENBQW1CLFdBQXVCOztZQUU3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLHVCQUFhLENBQUMsV0FBSSxDQUFDLENBQUM7WUFDMUMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUVuQyxNQUFNLFdBQVcsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1lBQ3pDLE1BQU0sV0FBVyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFFekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxFQUFFLENBQUMsQ0FBQztZQUN0RSxNQUFNLFlBQVksR0FBRyxNQUFN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QUEsNkM7Ozs7Ozs7QUNBQSwwQzs7Ozs7OztBQ0FBLDhDOzs7Ozs7O0FDQUEsMEM7Ozs7Ozs7QUNBQSxxQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEFyZywgTXV0YXRpb24sIFF1ZXJ5LCBSZXNvbHZlciwgVXNlTWlkZGxld2FyZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgTG9naW5JbnB1dCB9IGZyb20gXCIuLi90eXBlcy9pbnB1dFR5cGUvTG9naW5JbnB1dFwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgQ2hlY2tMb2dpbiB7XG4gICBcbiAgIFxuXG4gICAgLy8gQFF1ZXJ5KCgpID0+IFVzZXIpXG4gICAgLy8gYXN5bmMgTG9naW5DaGVjaygpOiBQcm9taXNlIDwgVXNlciB8IG51bGwgfCB2b2lkID4ge1xuICAgIC8vICAgICBjb25zdCBUaGVVc2VyID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAgICAgXG5cbiAgICAvLyAgICAgcmV0dXJuIFRoZVVzZXIuZmluZE9uZSh7dXNlcm5hbWU6XCJyZXJlXCIgfSk7XG4gICAgLy8gICAgIH1cblxuXG4gICAgQE11dGF0aW9uKCgpID0+IFVzZXIpXG4gICAgLy8gQFVzZU1pZGRsZXdhcmUoTG9nQWNjZXNzKVxuICAgIGFzeW5jIExvZ2luKEBBcmcoXCJMb2dpbkRhdGFcIikgdGhlUGFyYW1ldHI6IExvZ2luSW5wdXQpOiBQcm9taXNlIDwgVXNlciB8IG51bGwgfCB2b2lkID4ge1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IFRoZVVzZXIgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFVzZXIpO1xuICAgICAgICAgICAgY29uc3QgVGhlRW1haWwgPSB0aGVQYXJhbWV0ci5lbWFpbDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGVtYWlsT3JVc2VybmFtZVxuICAgICAgICAgICAgY29uc3QgVGhlVXNlcm5hbWUgPSB0aGVQYXJhbWV0ci51c2VybmFtZTtcbiAgICAgICAgICAgIGNvbnN0IFRoZVBhc3N3b3JkID0gdGhlUGFyYW1ldHIucGFzc3dvcmQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IEVtYWlsRmluZCA9IGF3YWl0IFRoZVVzZXIuZmluZE9uZSh7IHdoZXJlOiB7ZW1haWw6IFRoZUVtYWlsfSB9KTtcbiAgICAgICAgICAgIGNvbnN0IFVzZXJuYW1lRmluZCA9IGF3YWl0IFRoZVVzZXIuZmluZE9uZSh7IHdoZXJlOiB7dXNlcm5hbWU6IFRoZVVzZXJuYW1lIH19KTsgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFbWFpbEZpbmQnLCBFbWFpbEZpbmQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzZXJuYW1lRmluZCcsIFVzZXJuYW1lRmluZCk7XG5cbiAgICAgICAgICAgIGlmKCFFbWFpbEZpbmQgJiYgIVVzZXJuYW1lRmluZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuICBudWxsOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKEVtYWlsRmluZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShUaGVQYXNzd29yZCwgRW1haWxGaW5kIS5wYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgaWYoIVBhc3N3b3JkTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRW1haWxGaW5kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXNlcm5hbWVGaW5kKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgUGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFRoZVBhc3N3b3JkLCBVc2VybmFtZUZpbmQhLnBhc3N3b3JkKTtcbiAgICAgICAgICAgICAgICBpZighUGFzc3dvcmRNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVc2VybmFtZUZpbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG59IiwiaW1wb3J0IHsgQXJnLCBNdXRhdGlvbiwgUXVlcnksIFJlc29sdmVyLCBDdHggfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBJbnB1dENvbW1lbnQgfSBmcm9tIFwiLi4vdHlwZXMvaW5wdXRUeXBlL0lucHV0Q29tbWVudFwiO1xuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuLi90eXBlcy9lbnRpdHkvT2JqZWN0Q29tbWVudFwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZXMvZW50aXR5L09iamVjdFBvc3RcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24sIEVudGl0eSwgZ2V0TWFuYWdlciwgZ2V0UmVwb3NpdG9yeSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBSZXNvbHZlQ29tbWVudCB7XG4gICAgQFF1ZXJ5KClcbiAgICBhc3luYyBIaSgpIHtcbiAgICAgICAgcmV0dXJuIFwiSGlcIjtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgQE11dGF0aW9uKCgpID0+IE9iamVjdENvbW1lbnQpXG4gICAgYXN5bmMgQ29tbWVudFJlc29sdmVyKFxuICAgICAgICBAQXJnKFwiRGF0YUNvbW1lbnRcIikgU2luZ2xlUGFyYW1ldHI6IElucHV0Q29tbWVudCxcbiAgICAgICAgQEN0eCgpIGN0eDphbnlcbiAgICApOiBQcm9taXNlPCBPYmplY3RDb21tZW50IHwgIFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuICAgICAgICBjb25zdCBDb21PYmogPSBuZXcgT2JqZWN0Q29tbWVudCgpO1xuICAgICAgICBjb25zdCBQb3N0T2JqID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgICAgIC8vIGNvbnN0IFBvc3RPYmogPSBuZXcgUG9zdE9iamVjdFR5cGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coY3R4KTtcbiAgICAgICAgQ29tT2JqLnVzZXIgPSBjdHgudXNlcm5hbWU7XG4gICAgICAgIENvbU9iai5ib2R5ID0gU2luZ2xlUGFyYW1ldHIuYm9keTtcbiAgICAgICAgYXdhaXQgQ29tT2JqLnNhdmUoKTtcbiAgICAgICAgUG9zdE9iai5jb21tZW50cyA9IFtDb21PYmpdXG4gICAgICAgIGF3YWl0IFBvc3RPYmouc2F2ZSgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIENvbU9iajtcblxuXG4gICAgfVxufWBgIiwiaW1wb3J0IHtcbiAgQXJnLFxuICBDdHgsXG4gIC8vIEFyZ3MsXG4gIE11dGF0aW9uLFxuICBRdWVyeSxcbiAgUmVzb2x2ZXIsXG4gIFVzZU1pZGRsZXdhcmUsXG4gIC8vIFVzZU1pZGRsZXdhcmUsXG59IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVzL2VudGl0eS9PYmplY3RQb3N0XCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuaW1wb3J0IHsgQ3JlYXRlUG9zdElucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9JbnB1dFBvc3RcIjtcbmltcG9ydCB7IGdldFJlcG9zaXRvcnkgfSBmcm9tIFwidHlwZW9ybVwiO1xuXG5cbi8vIGltcG9ydCB7IExvZ0FjY2VzcyB9IGZyb20gXCIuLi9taWRkbGV3YXJlL2NoZWNrSW5wdXRcIjtcblxuXG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9jaGVja0lucHV0XCI7XG5pbXBvcnQgeyBNeUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXMvY29udGV4dC9NeUNvbnRleHRcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBQb3N0UmVzb2x2ZXIge1xuICBAUXVlcnkoKCkgPT4gU3RyaW5nKVxuICBhc3luYyBIZWxsb0JpdGNoKCk6UHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gXCJIaUJpdGNoXCI7XG4gIH1cblxuICBAVXNlTWlkZGxld2FyZShpc0F1dGgpXG4gIEBNdXRhdGlvbigoKSA9PiBQb3N0T2JqZWN0VHlwZSwgeyBuYW1lOiBcImNyZWF0ZVBvc3RCeUlucHV0XCIsIG51bGxhYmxlOiB0cnVlIH0pXG4gIC8vIEBVc2VNaWRkbGV3YXJlKExvZ0FjY2VzcylcbiAgYXN5bmMgc2FhcyhcbiAgICBAQXJnKFwic2luZ2xlUGFyYW1ldHJcIikgc2luZ2xlUGFyYW1ldHI6IENyZWF0ZVBvc3RJbnB1dCxcbiAgICBcbiAgKTogUHJvbWlzZTxQb3N0T2JqZWN0VHlwZSB8IG51bGw+IHtcbiAgICBjb25zdCByZXR1cm5Qb3N0ID0gbmV3IFBvc3RPYmplY3RUeXBlKCk7XG4gICAgcmV0dXJuUG9zdC5kZXNjcmlwdGlvbiA9IHNpbmdsZVBhcmFtZXRyLmRlc2NyaXB0aW9uO1xuICAgIFxuICAgIFxuICAgIC8vIHJldHVyblBvc3QuY29tbWVudHMgPSBzaW5nbGVQYXJhbWV0ci5jb21tZW50cztcbiAgICAvLyByZXR1cm5Qb3N0Lmxpa2VzID0gc2luZ2xlUGFyYW1ldHIubGlrZXM7XG4gICAgLy8gcmV0dXJuUG9zdC5pZCA9IHNpbmdsZVBhcmFtZXRyLmlkO1xuICAgIC8vIHJldHVyblBvc3QuaXNBY3RpdmUgPSBzaW5nbGVQYXJhbWV0ci5pc0FjdGl2ZTtcblxuICAgIGNvbnN0IHBvc3RSZXAgPSBhd2FpdCBnZXRSZXBvc2l0b3J5KFBvc3RPYmplY3RUeXBlKTtcbiAgICAvLyBjb25zdCBDb21tZW50UG9zdCA9IGF3YWl0IHBvc3RSZXAuZmluZCh7IHJlbGF0aW9uczogW2NvbW1lbnRzXSB9KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBhd2FpdCBwb3N0UmVwLnNhdmUocmV0dXJuUG9zdCk7XG4gICAgcmV0dXJuIHJldHVyblBvc3Q7XG4gICAgXG4gIH1cbn1cbiIsImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5pbXBvcnQgeyBBcmcsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIsIFVzZU1pZGRsZXdhcmUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbi8vIGltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L015Q29udGV4dFwiO1xuaW1wb3J0IHsgVXNlcklucHV0IH0gZnJvbSBcIi4uL3R5cGVzL2lucHV0VHlwZS9pbnB1dFVzZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBQcml2YXRlS2V5LCBQdWJsaWNLZXkgfSBmcm9tIFwiLi4vdXRpbGl0ZXMvdG9rZW4va2V5c1wiO1xuaW1wb3J0IHsgU2lnbk9wdGlvbiB9IGZyb20gXCIuLi91dGlsaXRlcy90b2tlbi9zaWduT3B0aW9uXCI7XG5pbXBvcnQgKiBhcyBqd3QgIGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gXCIuLi9taWRkbGV3YXJlL2NoZWNrSW5wdXRcIjtcblxuQFJlc29sdmVyKClcbmV4cG9ydCBjbGFzcyBVc2VyUmVzb2x2ZXIge1xuICAgIEBVc2VNaWRkbGV3YXJlKGlzQXV0aClcbiAgICBAUXVlcnkoKVxuICAgIGFzeW5jIEhlbGxvQml0Y2goKSB7XG4gICAgICAgIHJldHVybiBcIkhpQml0Y2hcIjtcbiAgICB9XG5cbiAgICAvLyBATXV0YXRpb24oKCkgPT4gVXNlcilcbiAgICAvLyBhc3luYyByZWdpc3RlcihAQXJnKFwiZGF0YVwiKSBTaW5nbGVQYXJhbWV0cjogVXNlcklucHV0KTogUHJvbWlzZTxVc2VyIHwgYW55PiB7XG4gICAgLy8gICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goU2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKVxuXG4gICAgLy8gICAgIGNvbnN0IFVzZXJuYW1lID0gYCR7U2luZ2xlUGFyYW1ldHIuZmlyc3ROYW1lfSAuICR7U2luZ2xlUGFyYW1ldHIubGFzdE5hbWV9YFxuXG4gICAgLy8gICAgIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgLy8gICAgIC8vICAgICBmaXJzdE5hbWUsXG4gICAgLy8gICAgIC8vICAgICBsYXN0TmFtZSxcbiAgICAvLyAgICAgLy8gICAgIGVtYWlsLFxuICAgIC8vICAgICAvLyAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxuICAgIC8vICAgICAvLyAgICAgdXNlcm5hbWU6IFVzZXJuYW1lXG4gICAgLy8gICAgIC8vIH0pLnNhdmUoKTtcblxuICAgIC8vICAgICBjb25zdCB1c2VyUmVwID0gYXdhaXQgZ2V0UmVwb3NpdG9yeShVc2VyKTtcbiAgICAvLyAgICAgdXNlclJlcC5zYXZlKHtTaW5nbGVQYXJhbWV0ci5maXJzdE5hbWUsIH0pXG5cbiAgICAvLyAgICAgcmV0dXJuIHVzZXI7XG4gICAgLy8gfVxuXG4gICAgQE11dGF0aW9uKClcbiAgICBhc3luYyByZWdpc3RlcihAQXJnKFwiVXNlckRhdGFcIikgc2luZ2xlUGFyYW1ldHI6IFVzZXJJbnB1dCk6IFByb21pc2U8U3RyaW5nIHwgdm9pZCA+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJldHVyblVzZXIgPSBuZXcgVXNlcigpO1xuICAgICAgICByZXR1cm5Vc2VyLmZpcnN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmZpcnN0TmFtZTtcbiAgICAgICAgcmV0dXJuVXNlci5sYXN0TmFtZSA9IHNpbmdsZVBhcmFtZXRyLmxhc3ROYW1lO1xuICAgICAgICByZXR1cm5Vc2VyLmVtYWlsID0gc2luZ2xlUGFyYW1ldHIuZW1haWw7XG4gICAgICAgIFxuICAgICAgICByZXR1cm5Vc2VyLnBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2goc2luZ2xlUGFyYW1ldHIucGFzc3dvcmQsIDEyKTtcbiAgICAgICAgcmV0dXJuVXNlci51c2VybmFtZSA9IHNpbmdsZVBhcmFtZXRyLnVzZXJuYW1lO1xuICAgICAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICAgICAgY29uc3QgdG9rZW5Vc2VyID0gand0LnNpZ24oe1xuICAgICAgICAgICAgICAgIGlkOiByZXR1cm5Vc2VyLmlkLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmV0dXJuVXNlci5maXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6IHJldHVyblVzZXIubGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHJldHVyblVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHJldHVyblVzZXIudXNlcm5hbWUsXG4gICAgICAgIH0sIFByaXZhdGVLZXksIFNpZ25PcHRpb24pO1xuICAgICAgICByZXR1cm5Vc2VyLnRva2VuID0gdG9rZW5Vc2VyO1xuICAgICAgICBhd2FpdCByZXR1cm5Vc2VyLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIHRva2VuVXNlcjtcbiAgICB9XG5cblxufVxuIiwiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgYnVpbGRTY2hlbWEgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBQb3N0UmVzb2x2ZXIgfSBmcm9tIFwiLi9SZW9sdmVycy9SZXNvbHZlUG9zdFwiO1xuaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlcy9lbnRpdHkvT2JqZWN0UG9zdFwiO1xuaW1wb3J0IHsgVXNlclJlc29sdmVyIH0gZnJvbSBcIi4vUmVvbHZlcnMvUmVzb2x2ZVVzZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi90eXBlcy9Vc2VyL3VzZXJcIjtcbi8vIGltcG9ydCBFeHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyBDaGVja0xvZ2luIH0gZnJvbSBcIi4vUmVvbHZlcnMvQ2hlY2tMb2dpblwiO1xuLy8gaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IHsgUmVzb2x2ZUNvbW1lbnQgfSBmcm9tIFwiLi9SZW9sdmVycy9SZXNvbHZlQ29tbWVudFwiO1xuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuL3R5cGVzL2VudGl0eS9PYmplY3RDb21tZW50XCI7XG5pbXBvcnQgeyBpc0F1dGggfSBmcm9tIFwiLi9taWRkbGV3YXJlL2NoZWNrSW5wdXRcIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5cblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgNDA0MDtcblxuYXN5bmMgZnVuY3Rpb24gQm9vdHN0cmFwKCkge1xuICBjb25zdCBjb25uZWN0aW9uUG9zdCA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgIG5hbWU6IFwiZGVmYXVsdFwiLFxuICAgIHR5cGU6IFwicG9zdGdyZXNcIixcbiAgICBob3N0OiBcImxvY2FsaG9zdFwiLFxuICAgIHBvcnQ6IDU0MzIsXG4gICAgdXNlcm5hbWU6IFwiaXJsZW50dXJseWtoYW5vdlwiLFxuICAgIHBhc3N3b3JkOiBcIjEyMzRcIixcbiAgICBkYXRhYmFzZTogXCJwb3N0c1wiLFxuICAgIHN5bmNocm9uaXplOiB0cnVlLFxuICAgIGxvZ2dpbmc6IHRydWUsXG4gICAgZW50aXRpZXM6IFtQb3N0T2JqZWN0VHlwZSwgVXNlciwgT2JqZWN0Q29tbWVudF0sXG4gIH0pO1xuXG4gIGNvbnN0IHNjaGVtYSA9IGF3YWl0IGJ1aWxkU2NoZW1hKHtcbiAgICByZXNvbHZlcnM6IFtQb3N0UmVzb2x2ZXIsIFVzZXJSZXNvbHZlciwgQ2hlY2tMb2dpbiwgUmVzb2x2ZUNvbW1lbnRdLFxuICAgIGdsb2JhbE1pZGRsZXdhcmVzOltpc0F1dGhdXG4gIH0pO1xuXG4gIGNvbnN0IHByb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCI7XG5cbiAgY29uc3Qgc2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gICAgc2NoZW1hOiBzY2hlbWEsXG4gICAgcGxheWdyb3VuZDogdHJ1ZSxcbiAgICBjb250ZXh0OiAoeyByZXEgfSkgPT4ge1xuICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xuXG4gICAgICBjb25zdCB1c2VyID0gand0LmRlY29kZSh0b2tlbilcblxuICAgICAgaWYgKCF1c2VyKSB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGJlIGxvZ2dlZCBpbicpOyBcblxuICAgICAgcmV0dXJuIHsgdXNlciB9O1xuICAgIH0sXG4gIH0pO1xuXG4gIHNlcnZlci5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU2VydmVyIHN0YXJ0ZWQsIGJpdGNoXCIpO1xuICB9KTtcblxuICAvLyBjb25zdCBzZXJ2ZXJJbmZvID0gYXdhaXQgc2VydmVyLmxpc3RlbihQT1JUKTtcbiAgLy8gY29uc29sZS5sb2coXCJTRVJWRUVSIFNUQVJURURcIik7XG59XG5cbkJvb3RzdHJhcCgpO1xuIiwiaW1wb3J0IHsgTWlkZGxld2FyZUZuIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdHlwZXMvVXNlci91c2VyXCI7XG5pbXBvcnQgeyBnZXRSZXBvc2l0b3J5IH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gXCIuLi90eXBlcy9jb250ZXh0L015Q29udGV4dFwiO1xuaW1wb3J0IHsgUHJpdmF0ZUtleSwgUHVibGljS2V5IH0gZnJvbSBcIi4uL3V0aWxpdGVzL3Rva2VuL2tleXNcIjtcblxuLy8gZXhwb3J0IGNvbnN0IExvZ0FjY2VzczogTWlkZGxld2FyZUZuID0gKHsgY29udGV4dCwgaW5mbyB9LCBuZXh0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGluZm8pO1xuLy8gICBjb25zdCB0b2tlbiA9IChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcbi8vICAgY29uc29sZS5sb2coand0LmRlY29kZSgoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pKTtcbi8vICAgY29uc29sZS5sb2coKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKTtcbi8vICAgcmV0dXJuIG5leHQoKTtcbi8vIH07XG5cbmV4cG9ydCBjb25zdCBpc0F1dGg6IE1pZGRsZXdhcmVGbjxNeUNvbnRleHQ+ID0gYXN5bmMgKFxuICB7IGluZm8sIGNvbnRleHQgfSxcbiAgbmV4dFxuKSA9PiB7XG4gIGNvbnNvbGUubG9nKGluZm8pO1xuICBjb25zb2xlLmxvZyhpbmZvLmZpZWxkTmFtZSk7XG4gIFxuICAvLyBpZiAoaW5mby5maWVsZE5hbWUgPT0gXCJMb2dpblwiIHx8IGluZm8uZmllbGROYW1lID09IFwicmVnaXN0ZXJcIikge1xuICAvLyAgIHJldHVybiBuZXh0KCk7XG4gIC8vIH1cbiAgXG4gIC8vIGNvbnNvbGUubG9nKChjb250ZXh0IGFzIGFueSkucmVxLmhlYWRlci5hdXRob3JpemF0aW9uKTtcbiAgLy8gY29uc29sZS5sb2coand0LmRlY29kZSgoY29udGV4dCBhcyBhbnkpLnJlcS5oZWFkZXIuYXV0aG9yaXphdGlvbikpO1xuICAvLyBpZiAoIWp3dC52ZXJpZnkoKGNvbnRleHQgYXMgYW55KS5yZXEuaGVhZGVyLmF1dGhvcml6YXRpb24sIFB1YmxpY0tleSkpIHtcbiAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF1dGhvcml6YXRpb24nKTtcbiAgLy8gfVxuICBjb25zdCB0ZW9rID0gJ2V5SmhiR2NpT2lKU1V6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNklqUTVNbUV3WW1NNExUSmlNRFV0TkRaa05TMDVNamd3TFdJek1HUXhObUk0TVRoalpDSXNJbVpwY25OMFRtRnRaU0k2SWt4QlRpSXNJbXhoYzNST1lXMWxJam9pUVZRaUxDSmxiV0ZwYkNJNkltaGxiRzl0YVdzeE1VQm5iV0ZwYkM1amIyMGlMQ0oxYzJWeWJtRnRaU0k2SW14c2IyMHhNU0lzSW1saGRDSTZNVFl3T0RVMU5EVTVOeXdpWlhod0lqb3hOalF3TURrd05UazNMQ0poZFdRaU9pSWlMQ0pwYzNNaU9pSWlMQ0p6ZFdJaU9pSWlmUS5GdWhma3VOdVZ1SE0tOWVydTB1QXN0NlBQV1RQV2ZZUkFEVnF3d3BuZno5YkM1Skx1VmZmTFpxQlA3WnlpSUxrNHVfZENQWXU2ZENRU2dwWEcwUC1sZyc7XG4gIGNvbnNvbGUubG9nKGp3dC5kZWNvZGUodGVvaykpO1xuICByZXR1cm4gbmV4dCgpO1xufTtcbiIsImltcG9ydCB7IFJlcGxhY2VGaWVsZFdpdGhGcmFnbWVudCB9IGZyb20gXCJhcG9sbG8tc2VydmVyXCI7XG5pbXBvcnQgeyBGaWVsZCwgSUQsIE9iamVjdFR5cGUsIFJvb3QgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgT25lVG9NYW55LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4uL2VudGl0eS9PYmplY3RQb3N0XCI7XG5cblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VFbnRpdHkge1xuXG4gICAgQEZpZWxkKCgpID0+IElEKVxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKFwidXVpZFwiKVxuICAgIGlkITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKFwidGV4dFwiLCB7IHVuaXF1ZTogdHJ1ZSB9KVxuICAgIGVtYWlsITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICBAQ29sdW1uKCkgXG4gICAgcGFzc3dvcmQhOiBzdHJpbmc7XG5cbiAgICAvLyBARmllbGQoKVxuICAgIC8vIHVzZXJuYW1lKEBSb290KCkgcGFyZW50OiBVc2VyKTogU3RyaW5nIHtcbiAgICAvLyAgICAgcmV0dXJuIGAke3BhcmVudC5maXJzdE5hbWV9IC4gJHtwYXJlbnQubGFzdE5hbWV9YFxuICAgIC8vIH1cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIHVzZXJuYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKCgpPT5bUG9zdE9iamVjdFR5cGVdKVxuICAgIEBPbmVUb01hbnkoJ1Bvc3RPYmplY3RUeXBlJywgKHBvc3Q6IFBvc3RPYmplY3RUeXBlKSA9PiBwb3N0LnVzZXIpXG4gICAgcG9zdHM/OiBQb3N0T2JqZWN0VHlwZVtdO1xuXG5cbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAgIHRva2VuITogc3RyaW5nO1xufVxuXG4iLCJpbXBvcnQgeyBGaWVsZCwgSUQsIE9iamVjdFR5cGUgfSBmcm9tIFwidHlwZS1ncmFwaHFsXCI7XG5pbXBvcnQgeyBCYXNlRW50aXR5LCBDb2x1bW4sIEVudGl0eSwgSm9pbkNvbHVtbiwgSm9pblRhYmxlLCBNYW55VG9NYW55LCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9Vc2VyL3VzZXJcIjtcbmltcG9ydCB7IFBvc3RPYmplY3RUeXBlIH0gZnJvbSBcIi4vT2JqZWN0UG9zdFwiO1xuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBPYmplY3RDb21tZW50IGV4dGVuZHMgQmFzZUVudGl0eXtcblxuICAgIEBGaWVsZCgoKSA9PiBQb3N0T2JqZWN0VHlwZSlcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgICBATWFueVRvT25lKCgpID0+IFBvc3RPYmplY3RUeXBlLCAoY29tbWVudElkOiBQb3N0T2JqZWN0VHlwZSkgPT4gY29tbWVudElkLmNvbW1lbnRzKVxuICAgIEBKb2luQ29sdW1uKClcbiAgICBDb21tZW50SWQhOiBQb3N0T2JqZWN0VHlwZTtcbiAgICBcbiAgICBARmllbGQoKVxuICAgIEBNYW55VG9PbmUoJ1VzZXInLCAodXNlcjogVXNlcikgPT4gdXNlci51c2VybmFtZSlcbiAgICB1c2VyITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBAQ29sdW1uKClcbiAgICBib2R5ITogc3RyaW5nO1xuXG4gICAgLy8gQEZpZWxkKClcbiAgICAvLyBATWFueVRvT25lKCdVc2VyJywgKHVzZXI6IFVzZXIpID0+IHVzZXIuaWQpXG4gICAgLy8gQEpvaW5UYWJsZSgpXG4gICAgLy8gb3duZXJJZCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgoKSA9PiBQb3N0T2JqZWN0VHlwZSlcbiAgICBATWFueVRvT25lKCgpPT4gUG9zdE9iamVjdFR5cGUsIChwb3N0OiBQb3N0T2JqZWN0VHlwZSkgPT4gcG9zdC5pZClcbiAgICBQb3N0SWQhOiBQb3N0T2JqZWN0VHlwZTtcblxufSAgICIsImltcG9ydCB7IE9iamVjdFR5cGUsIElELCBGaWVsZCB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IEJhc2VFbnRpdHksIENvbHVtbiwgRW50aXR5LCBKb2luQ29sdW1uLCBKb2luVGFibGUsIE1hbnlUb09uZSwgT25lVG9NYW55LCBPbmVUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL1VzZXIvdXNlclwiO1xuaW1wb3J0IHsgT2JqZWN0Q29tbWVudCB9IGZyb20gXCIuL09iamVjdENvbW1lbnRcIjtcbiAgXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBQb3N0T2JqZWN0VHlwZSBleHRlbmRzIEJhc2VFbnRpdHkge1xuICAgIFxuICAgIEBGaWVsZCgoKSA9PiBJRClcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gICAgaWQhOiBTdHJpbmc7XG4gIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbih7dHlwZTogXCJ0ZXh0XCJ9KVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuICBcblxuICAgIEBPbmVUb01hbnkoKCkgPT4gT2JqZWN0Q29tbWVudCwgKGNvbW1lbnRzOiBPYmplY3RDb21tZW50KSA9PiBjb21tZW50cy5Db21tZW50SWQpXG4gICAgY29tbWVudHMhOiBPYmplY3RDb21tZW50W107XG4gIFxuICAgIEBGaWVsZCgpXG4gICAgQENvbHVtbigpXG4gICAgbGlrZXM/OiBudW1iZXI7XG4gIFxuICBcbiAgICBARmllbGQoKVxuICAgIEBDb2x1bW4oKVxuICAgIGlzQWN0aXZlITogYm9vbGVhbjtcbiAgXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLmlkKVxuICAgIG93bmVySWQ/OiBzdHJpbmc7XG4gICAgXG4gICAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgQE1hbnlUb09uZSgnVXNlcicsICh1c2VyOiBVc2VyKSA9PiB1c2VyLnBvc3RzKVxuICAgIHVzZXI/OiBzdHJpbmc7XG4gICAgXG59IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcblxuXG5ASW5wdXRUeXBlKClcbmV4cG9ydCBjbGFzcyBJbnB1dENvbW1lbnQge1xuICAgIEBGaWVsZCgpXG4gICAgYm9keSE6IHN0cmluZztcblxuXG5cbn0iLCJpbXBvcnQgeyBGaWVsZCwgSW5wdXRUeXBlIH0gZnJvbSBcInR5cGUtZ3JhcGhxbFwiO1xuLy8gaW1wb3J0IHsgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbi8vIEBFbnRpdHkoKVxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgQ3JlYXRlUG9zdElucHV0IHtcbiAgICBcbiAgICBARmllbGQoKVxuICAgIGRlc2NyaXB0aW9uITogc3RyaW5nO1xuXG4gICAgXG59IiwiaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcblxuXG5cblxuQElucHV0VHlwZSgpXG5leHBvcnQgY2xhc3MgTG9naW5JbnB1dCB7XG4gICAgQEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgICBlbWFpbD86IHN0cmluZztcblxuICAgIEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIHBhc3N3b3JkITogc3RyaW5nOyBcblxuXG59IiwiaW1wb3J0IHsgSXNFbWFpbCwgTGVuZ3RoIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgRmllbGQsIElucHV0VHlwZSB9IGZyb20gXCJ0eXBlLWdyYXBocWxcIjtcbmltcG9ydCB7IElzRW1haWxBbHJlYWR5RXhpc3QgfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGUvdmFsaWRhdGVFbWFpbFwiO1xuaW1wb3J0IHsgSXNVc2VybmFtZUFscmVhZHlFeGlzdCB9IGZyb20gXCIuLi8uLi92YWxpZGF0ZS92YWxpZGF0ZVVzZXJuYW1lXCI7XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJJbnB1dCB7XG4gICAgQEZpZWxkKClcbiAgICBATGVuZ3RoKDEsIDEwMClcbiAgICBmaXJzdE5hbWUhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBMZW5ndGgoMSwgMTAwKVxuICAgIGxhc3ROYW1lITogc3RyaW5nO1xuXG4gICAgQEZpZWxkKClcbiAgICBASXNFbWFpbCgpXG4gICAgQElzRW1haWxBbHJlYWR5RXhpc3QoeyBtZXNzYWdlOiBcImVtYWlsIGlzIGFscmVhZHkgaW4gdXNlXCIgfSlcbiAgICBlbWFpbCE6IHN0cmluZztcblxuICAgIEBGaWVsZCgpXG4gICAgcGFzc3dvcmQhOiBzdHJpbmc7XG5cbiAgICBARmllbGQoKVxuICAgIEBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHsgbWVzc2FnZTogXCJ1c2VybmFtZSBpcyBhbHJlYWR5IGluIHVzZVwifSlcbiAgICB1c2VybmFtZSE6IHN0cmluZztcblxuXG4gICAgXG59IiwiXG5cbmV4cG9ydCBjb25zdCBQcml2YXRlS2V5ICA9ICAgYC0tLS0tQkVHSU4gUlNBIFBSSVZBVEUgS0VZLS0tLS1cbk1JSUJQQUlCQUFKQkFNU1A0YjB4QjZkU0Q0eDlkYXVlRnVYNTYwbDlIUnlXb2VYQVUxVmErRVJjeFlRT3NqZm1cbll4S0IyeGVlbEs5MmViY3AxdWkxMGhBVHZiWmlCVzNjeGs4Q0F3RUFBUUpCQUlGelpLNnRrS1hRTkc5STNPc1dcblpXdzJDSS9RZHhDeDM1T284dmpldld4L0tSbUVIQmZ3a1VoS2o5a2RKZ1UvNW1wYzBXZ1dHNHo1V2RFcm5iOUhcbnVMa0NJUURnblhYS2dDMUZGbjc1ZUt0L2hxM2c1aEtYRFBnbVZUUFBsL1M2Wm5UTXl3SWhBT0FHOVFVdkdSdVBcbk1taHBRblhPb20vanJaWEdCZisrLzErRUV4dkRYeUFOQWlFQWxmSEh2b1ZPc3o1UFNXNzYzY2trcm13b29ObXhcbmxyVnVQdmtzRUh0eElYMENJRnp6aGdZNG5IcEsxK2RxaFNETU02bXBGZ1Rtdk9aNElRMUloNFVsY3ZxaEFpRUFcbnBtNTJFSW5UYjRrekwzU3NKcWdVd1RqZUZTVE03VTFoMjlqQVZMM2lOMjg9XG4tLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLWA7XG5cbmV4cG9ydCBjb25zdCBQdWJsaWNLZXkgPSBgLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cbk1Gd3dEUVlKS29aSWh2Y05BUUVCQlFBRFN3QXdTQUpCQU1TUDRiMHhCNmRTRDR4OWRhdWVGdVg1NjBsOUhSeVdcbm9lWEFVMVZhK0VSY3hZUU9zamZtWXhLQjJ4ZWVsSzkyZWJjcDF1aTEwaEFUdmJaaUJXM2N4azhDQXdFQUFRPT1cbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLWAiLCJpbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5leHBvcnQgdmFyIFNpZ25PcHRpb24gOmp3dC5TaWduT3B0aW9ucz0ge1xuICAgIGlzc3VlcjogXCJcIixcbiAgICBzdWJqZWN0OlwiXCIsXG4gICAgYXVkaWVuY2U6IFwiXCIsXG4gICAgZXhwaXJlc0luOiBcIjM2NWRcIixcbiAgICBhbGdvcml0aG06IFwiUlMyNTZcIlxufTsiLCJpbXBvcnQgeyByZWdpc3RlckRlY29yYXRvciwgVmFsaWRhdGlvbk9wdGlvbnMsIFZhbGlkYXRvckNvbnN0cmFpbnQsIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2UgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3R5cGVzL1VzZXIvdXNlclwiO1xuLy8gaW1wb3J0IHsgUG9zdE9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZW50aXR5L09iamVjdFBvc3RcIjtcbiBcbiBcbi8vIEBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbi8vIGV4cG9ydCBjbGFzcyBGaW5hbE93bmVySWRcbi8vICAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuLy8gICAgIC8vIHZhbGlkYXRlKF9vd25lcklkOiBzdHJpbmcpOiBQcm9taXNlPFBvc3RPYmplY3RUeXBlIHwgbnVsbD4ge1xuLy8gICAgIC8vICAgICByZXR1cm4gXG4vLyAgICAgLy8gfVxuLy8gfVxuXG5AVmFsaWRhdG9yQ29uc3RyYWludCh7IGFzeW5jOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICBpbXBsZW1lbnRzIFZhbGlkYXRvckNvbnN0cmFpbnRJbnRlcmZhY2Uge1xuICAgIHZhbGlkYXRlKGVtYWlsOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsIH0gfSkudGhlbih1c2VyID0+IHtcbiAgICAgICAgICAgIGlmICh1c2VyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSXNFbWFpbEFscmVhZHlFeGlzdCh2YWxpZGF0ZU9wdGlvbnM/OiBWYWxpZGF0aW9uT3B0aW9ucykge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3Q6IE9iamVjdCwgcHJvcGVydHlOYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmVnaXN0ZXJEZWNvcmF0b3Ioe1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHZhbGlkYXRlT3B0aW9ucyxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogSXNFbWFpbEFscmVhZHlFeGlzdENvbnN0cmFpbnRcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG59IiwiaW1wb3J0IHsgcmVnaXN0ZXJEZWNvcmF0b3IsIFZhbGlkYXRpb25PcHRpb25zLCBWYWxpZGF0b3JDb25zdHJhaW50LCBWYWxpZGF0b3JDb25zdHJhaW50SW50ZXJmYWNlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi90eXBlcy9Vc2VyL3VzZXJcIjtcblxuXG5cbkBWYWxpZGF0b3JDb25zdHJhaW50KHsgYXN5bmM6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgIGltcGxlbWVudHMgVmFsaWRhdG9yQ29uc3RyYWludEludGVyZmFjZSB7XG4gICAgdmFsaWRhdGUodXNlcm5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXNlci5maW5kT25lKHsgd2hlcmU6IHsgdXNlcm5hbWUgfSB9KS50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0KHZhbGlkYXRlT3B0aW9ucz86IFZhbGlkYXRpb25PcHRpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdDogT2JqZWN0LCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xuICAgICAgICByZWdpc3RlckRlY29yYXRvcih7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgb3B0aW9uczogdmFsaWRhdGVPcHRpb25zLFxuICAgICAgICAgICAgY29uc3RyYWludHM6IFtdLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiBJc1VzZXJuYW1lQWxyZWFkeUV4aXN0Q29uc3RyYWludFxuICAgICAgICB9KTtcbiAgICB9O1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZS1ncmFwaHFsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg2MDcpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==