// const data = [
//     {
//         "donationPost": {
//             "postId": 1,
//             "user": {
//                 "userId": 1,
//                 "firstName": "John",
//                 "lastName": "Doe",
//                 "username": "john_doe",
//                 "imageUrl": null,
//                 "emailAddress": "john.doe@example.com",
//                 "profileDescription": "I am an active user",
//                 "isActive": true,
//                 "emailNotificationEnabled": true
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 1,
//                 "addressLine": "123 Main Street",
//                 "pincode": "400001",
//                 "longitude": 72.8557,
//                 "latitude": 19.076
//             },
//             "foodImageUrl": "image1.jpg",
//             "timeAvailable": "2024-03-15T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-03-10T09:53:02.58"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 2,
//             "user": {
//                 "userId": 2,
//                 "firstName": "Jane",
//                 "lastName": "Smith",
//                 "username": "jane_smith",
//                 "imageUrl": null,
//                 "emailAddress": "jane.smith@example.com",
//                 "profileDescription": "Another user profile",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 2,
//                 "addressLine": "456 Oak Avenue",
//                 "pincode": "400002",
//                 "longitude": 72.8777,
//                 "latitude": 19.1098
//             },
//             "foodImageUrl": "image2.jpg",
//             "timeAvailable": "2024-03-20T14:30:00",
//             "isPickupCompleted": true,
//             "createdAt": "2024-03-10T09:53:02.58"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 3,
//             "user": {
//                 "userId": 1,
//                 "firstName": "John",
//                 "lastName": "Doe",
//                 "username": "john_doe",
//                 "imageUrl": null,
//                 "emailAddress": "john.doe@example.com",
//                 "profileDescription": "I am an active user",
//                 "isActive": true,
//                 "emailNotificationEnabled": true
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 3,
//                 "addressLine": "123 Main Street",
//                 "pincode": "12345",
//                 "longitude": 45.678,
//                 "latitude": -67.89
//             },
//             "foodImageUrl": "https://example.com/food_image.jpg",
//             "timeAvailable": "2024-03-12T10:30:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-03-10T20:12:44.993"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 4,
//             "user": {
//                 "userId": 1,
//                 "firstName": "John",
//                 "lastName": "Doe",
//                 "username": "john_doe",
//                 "imageUrl": null,
//                 "emailAddress": "john.doe@example.com",
//                 "profileDescription": "I am an active user",
//                 "isActive": true,
//                 "emailNotificationEnabled": true
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 5,
//                 "addressLine": "123 Main Street",
//                 "pincode": "12345",
//                 "longitude": 45.678,
//                 "latitude": -67.89
//             },
//             "foodImageUrl": "https://example.com/food_image.jpg",
//             "timeAvailable": "2024-03-12T10:30:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-03-10T20:14:30.31"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 6,
//             "user": {
//                 "userId": 2,
//                 "firstName": "Jane",
//                 "lastName": "Smith",
//                 "username": "jane_smith",
//                 "imageUrl": null,
//                 "emailAddress": "jane.smith@example.com",
//                 "profileDescription": "Another user profile",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 8,
//                 "addressLine": "123 Main Street",
//                 "pincode": "12345",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": null
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 7,
//             "user": {
//                 "userId": 2,
//                 "firstName": "Jane",
//                 "lastName": "Smith",
//                 "username": "jane_smith",
//                 "imageUrl": null,
//                 "emailAddress": "jane.smith@example.com",
//                 "profileDescription": "Another user profile",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 11,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-03-11T00:17:41.327"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 11,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 22,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-03-13T19:58:14.423"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 12,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 26,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:23:01.84"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 13,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 27,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:24:50.52"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 14,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 28,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T07:56:19.41"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 15,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 29,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:26:52.82"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 16,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 30,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:30:11.09"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 17,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 31,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:30:52.253"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 18,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 32,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:31:57.333"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 19,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 33,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:32:31.627"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 20,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 34,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:35:37.04"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 21,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 35,
//                 "addressLine": "123 Main Street",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T13:39:52.67"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 22,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 36,
//                 "addressLine": "ritu add",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T14:14:45.63"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 23,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 37,
//                 "addressLine": "ritu add",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-06T14:34:55.37"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 24,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 38,
//                 "addressLine": "ritu add",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-08T22:05:34.18"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 25,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 39,
//                 "addressLine": "ritu add",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-08T22:06:33.457"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 26,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 40,
//                 "addressLine": "ritu add",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-10T11:11:26.797"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 27,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 41,
//                 "addressLine": "krishajdhk",
//                 "pincode": "7678673",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-03-25T12:00:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-10T11:12:32.067"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 28,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 42,
//                 "addressLine": "dcfs",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T03:30:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:00:57.633"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 29,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 43,
//                 "addressLine": "qq",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T03:37:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:07:52.5"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 30,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 44,
//                 "addressLine": "fds",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T03:40:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:10:06.02"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 31,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 45,
//                 "addressLine": "q",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T02:40:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:11:00.107"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 32,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 46,
//                 "addressLine": "a",
//                 "pincode": "935455",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T02:41:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:12:00.193"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 33,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 47,
//                 "addressLine": "123sd",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "http://example.com/food.jpg",
//             "timeAvailable": "2024-05-12T03:48:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:18:08.87"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 34,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 48,
//                 "addressLine": "124, surat pandeshar",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T02:59:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:30:04.437"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 35,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 49,
//                 "addressLine": "dsa",
//                 "pincode": "123232",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T04:12:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:42:27.45"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 36,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 50,
//                 "addressLine": "dsad121",
//                 "pincode": "121211",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "",
//             "timeAvailable": "2024-05-12T03:19:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:43:25.57"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 37,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 51,
//                 "addressLine": "232132",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T08:18:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:53:20.413"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 38,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 52,
//                 "addressLine": "232132",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T08:18:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:54:02.617"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 39,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 53,
//                 "addressLine": "skjfhkjs",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T03:28:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T21:57:08.257"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 40,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 54,
//                 "addressLine": "2738463287",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T03:30:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T22:01:00.107"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 41,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 55,
//                 "addressLine": "dkflj",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T04:32:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-11T22:03:04.053"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 42,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 56,
//                 "addressLine": "testing data",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-12T21:51:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-12T19:06:10.813"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 43,
//             "user": {
//                 "userId": 6,
//                 "firstName": "Nisha",
//                 "lastName": "Jain",
//                 "username": "jain11",
//                 "imageUrl": "",
//                 "emailAddress": "fsdha1314@gmail.com",
//                 "profileDescription": "hello,Its Nisha Jain",
//                 "isActive": false,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 1,
//                 "foodType": "Vegetarian"
//             },
//             "address": {
//                 "addressId": 57,
//                 "addressLine": "kubsurat",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/plain_photo.jpg",
//             "timeAvailable": "2024-05-12T22:27:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-12T16:55:10.58"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 44,
//             "user": {
//                 "userId": 35,
//                 "firstName": "dsfhk",
//                 "lastName": "jdshfkj",
//                 "username": "jksdhkfjlh",
//                 "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocL-OANmFurbQKB46GZBzHOp57GJ3fHccvICJZ6tciSYOEW9wNxw=s96-c",
//                 "emailAddress": "apsinghrana100@gmail.com",
//                 "profileDescription": "djfk;ldsjfk",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 58,
//                 "addressLine": "surat",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-13T10:20:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-13T04:47:41.813"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 45,
//             "user": {
//                 "userId": 35,
//                 "firstName": "dsfhk",
//                 "lastName": "jdshfkj",
//                 "username": "jksdhkfjlh",
//                 "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocL-OANmFurbQKB46GZBzHOp57GJ3fHccvICJZ6tciSYOEW9wNxw=s96-c",
//                 "emailAddress": "apsinghrana100@gmail.com",
//                 "profileDescription": "djfk;ldsjfk",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 59,
//                 "addressLine": "surat",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/pngtree-fast-food-big-ham-burger-png-image_6244235.png",
//             "timeAvailable": "2024-05-13T14:58:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-13T08:28:42.267"
//         }
//     },
//     {
//         "donationPost": {
//             "postId": 46,
//             "user": {
//                 "userId": 35,
//                 "firstName": "dsfhk",
//                 "lastName": "jdshfkj",
//                 "username": "jksdhkfjlh",
//                 "imageUrl": "https://lh3.googleusercontent.com/a/ACg8ocL-OANmFurbQKB46GZBzHOp57GJ3fHccvICJZ6tciSYOEW9wNxw=s96-c",
//                 "emailAddress": "apsinghrana100@gmail.com",
//                 "profileDescription": "djfk;ldsjfk",
//                 "isActive": true,
//                 "emailNotificationEnabled": false
//             },
//             "foodType": {
//                 "foodId": 2,
//                 "foodType": "Non-Vegetarian"
//             },
//             "address": {
//                 "addressId": 60,
//                 "addressLine": "south africa",
//                 "pincode": "395010",
//                 "longitude": 45.678,
//                 "latitude": 78.901
//             },
//             "foodImageUrl": "https://unique-kindnesskettle-image.s3.eu-west-1.amazonaws.com/Profiles/png-transparent-pizza-hut-italian-cuisine-take-out-restaurant-pizza-pizza-pie-food-pizza-logo-pizza-delivery-thumbnail.png",
//             "timeAvailable": "2024-05-13T16:07:00",
//             "isPickupCompleted": false,
//             "createdAt": "2024-05-13T09:39:51.35"
//         }
//     }
// ]


function homepage (){
    const ParentElement = document.querySelector('.contain');

    ParentElement.innerHTML = "";
 
    // Create the sidebar

    const sidebar = document.createElement('div');

    sidebar.className = 'sidebar';
 
    const topDiv = document.createElement('div');

    topDiv.className = 'top';
 
    const logoDiv = document.createElement('div');

    logoDiv.className = 'logo';

    logoDiv.innerHTML = '<i class="bx bx-donate-heart"></i><span>Kindness Kettle</span>';

    topDiv.appendChild(logoDiv);
 
    const menuIcon = document.createElement('i');

    menuIcon.className = 'bx bx-menu';

    menuIcon.id = 'btn';

    topDiv.appendChild(menuIcon);

    sidebar.appendChild(topDiv);
 
    const userDiv = document.createElement('div');

    userDiv.className = 'user';
 
    const userImg = document.createElement('img');

    userImg.src = 'https://i.pinimg.com/474x/17/01/29/170129210e99f5083afbffb6109f6b3d.jpg';

    userImg.alt = 'me';

    userImg.className = 'user-img';

    userDiv.appendChild(userImg);
 
    const userInfo = document.createElement('div');

    userInfo.innerHTML = '<p class="bold">ClientB</p><p>Admin</p>';

    userDiv.appendChild(userInfo);

    sidebar.appendChild(userDiv);
 
    const navList = document.createElement('ul');
 
    const navItems = [

        { icon: 'bx bx-home', text: 'Dashboard', onClick: 'createPost()' },

        { icon: 'bx bx-donate-heart', text: "Let's Donate", onClick: 'createForm()' },

        { icon: 'bx bxs-grid-alt', text: "Let's Donate", onClick: 'useranalytics()' },

        { icon: 'bx bx-log-out', text: 'Logout', onClick: 'logout()' }

    ];
 
    navItems.map(item => {

        const li = document.createElement('li');

        const a = document.createElement('a');

        a.href = '#';

        a.setAttribute('onclick', item.onClick);

        a.innerHTML = `<i class="${item.icon}"></i><span class="nav-item">${item.text}</span>`;

        li.appendChild(a);

        const tooltip = document.createElement('span');

        tooltip.className = 'tooltip';

        tooltip.textContent = item.text;

        a.appendChild(tooltip);

        navList.appendChild(li);

    });
 
    sidebar.appendChild(navList);

    ParentElement.appendChild(sidebar);
 
    // Create the main content area

    const mainContent = document.createElement('div');

    mainContent.className = 'main-content';
 
    const container = document.createElement('div');

    container.className = 'container';

    mainContent.appendChild(container);

    ParentElement.appendChild(mainContent);
 
    // Toggle sidebar functionality

    const btn = document.querySelector('#btn');

    btn.onclick = function() {

        sidebar.classList.toggle('active');

    };

};


function createPost() {
    alert("Create Post functionality not yet implemented.");
}

function createForm() {
    alert("Create Form functionality not yet implemented.");
}

// function logout() {
//     alert("Logout functionality not yet implemented.");
// }



  
    

    // document.addEventListener('DOMContentLoaded', function() {
    //     const commentText = document.querySelector('.commenttext');
      
    //     document.querySelector('.showComment').addEventListener('click', function() {
    //       commentText.style.display = commentText.style.display === 'none' ? 'block' : 'none';
    //     });
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     // if(!localStorage.getItem('jwttoken'))
    //     //     {
    //     //         window.location.href = 'landingpage.html';
    //     //     }

    //     createPost();
    // });


   async function createPost() {
    let jwttoken = localStorage.getItem('jwttoken');
    console.log(jwttoken);
        const postContainer = document.querySelector('.container');
        postContainer.innerHTML = ''; 

        const response = await fetch('http://52.16.194.174:8085/fetchAllDonationPosts',{   
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwttoken}` 
                }
            });
            const data = await response.json();
            console.log(data);

            data?.map(async(postRespone)=>{

   

        const postCard = document.createElement('div');
        postCard.className = 'postCard';

        const cardHeader = document.createElement('div');
        cardHeader.className = 'cardHeader';

        const userlogoName = document.createElement('div');
        userlogoName.className = 'userlogoName';

        const userImg = document.createElement('img');
        userImg.src = `${postRespone.donationPost.user.imageUrl}`;
        userImg.alt = 'me';
        userImg.className = 'user-img';

        const userName = document.createElement('span');
        userName.textContent = postRespone.donationPost.user.firstName + " " + postRespone.donationPost.user.lastName ;

        userlogoName.appendChild(userImg);
        userlogoName.appendChild(userName);

        const pickUpBtn = document.createElement('div');
        pickUpBtn.className = 'pickUpbtn';
        pickUpBtn.innerHTML = '<i class="bx bx-donate-heart">PickUp</i>';

        cardHeader.appendChild(userlogoName);
        cardHeader.appendChild(pickUpBtn);

        const postImage = document.createElement('div');
        postImage.className = 'postImage';

        const postImg = document.createElement('img');
        postImg.src = `${postRespone?.donationPost?.foodImageUrl}` || "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg";
        postImg.alt = 'me';

        postImage.appendChild(postImg);

        const foodType = document.createElement('div');
        foodType.className = 'foodtype';
        foodType.innerHTML = `<p><strong>Foodtype</strong> - ${postRespone.donationPost.foodType.foodType}</p>`;

        const postAddress = document.createElement('div');
        postAddress.className = 'postAddress';
        postAddress.innerHTML = `<p><strong>Address-</strong>${postRespone.donationPost.address.addressLine} ${postRespone.donationPost.address.pincode}</p>`;

    
        
        const LiketResponse = await fetch(`http://52.16.194.174:8085/kindnessKettle/like/get?postId=${postRespone.donationPost.postId}`,
        {   
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwttoken}` // Use the received token
                }
            }
        );
        const LikeData = await LiketResponse.json();
        console.log(LikeData);

        let TotalLike =LikeData[0]?.totalLikes || 0;


        let isLiked = false;
        const likeComment = document.createElement('div');
        likeComment.className = 'likeComment';
        const likeIcon = document.createElement('i');
        likeIcon.className = 'bx bx-heart';
        LikeData?.map(user=>{
            console.log(user.user.userId);
             if(user.user.userId===postRespone.donationPost.user.userId){
                console.log("user liked");
                likeIcon.className = 'bx bxs-heart';
                isLiked = true;
             }
        })
        likeIcon.style.cursor = 'pointer';
        likeComment.appendChild(likeIcon);
        likeComment.innerHTML += " <i class='bx bx-message-rounded-dots'></i>";



        const likeCommentTotal = document.createElement('div');
        likeCommentTotal.className = 'likeCommentTotal';
        likeCommentTotal.innerHTML = `<p><strong>${TotalLike}</strong> Likes</p><p class="showComment">View all <strong>18</strong> Comments</p>`;

        const inputBoxComment = document.createElement('div');
        inputBoxComment.className = 'InputBoxComment';
        inputBoxComment.style.display = 'none';
      
    //   const commentResponse =  [
    //         {
    //             "comment_date_time": null,
    //             "UserImage": null,
    //             "comment_content": "hello ajay",
    //             "UserName": "john_doe",
    //             "UserID": 1,
    //             "PostId": 36,
    //             "CommentID": 20
    //         },
    //         {
    //             "comment_date_time": null,
    //             "UserImage": null,
    //             "UserName": "john_doe",
    //             "UserID": 1,
    //             "comment_content": "hi how nice very good",
    //             "CommentID": 37,
    //             "PostId": 36
    //         }
    //     ]
        const commentData = await fetch(`http://52.16.194.174:8085/getComment/${postRespone.donationPost.postId}`,
        {   
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwttoken}` 
                }
            }
        );
            const commentResponse = await commentData.json();

            console.log(commentResponse);


        inputBoxComment.innerHTML = `
        <div class="commenttext">
            ${commentResponse.map(comment => `
                <div class="commentItem">
                    <img src="https://i.pinimg.com/474x/17/01/29/170129210e99f5083afbffb6109f6b3d.jpg" alt="User" class="commentUserImg">
                    <p class="commentUserName">User1:</p>
                    <p>${comment.comment_content}</p>
                </div>
            `).join('')}
        </div>
        <div class="commentInput">
            <input type="text" name="comment" id="commentId">
            <div class="sendbtn" id="sendCommentBtn">
                <i class="bx bxs-send"></i>
                <p>Send</p>
            </div>
        </div>
    `;
        
        postCard.appendChild(cardHeader);
        postCard.appendChild(postImage);
        postCard.appendChild(foodType);
        postCard.appendChild(postAddress);
        postCard.appendChild(likeComment);
        postCard.appendChild(likeCommentTotal);
        postCard.appendChild(inputBoxComment);

        postContainer.appendChild(postCard);

        const showCommentButton = postCard.querySelector('.showComment');
        const commentText = postCard.querySelector('.commenttext');
        const commentInputBox = postCard.querySelector('.InputBoxComment');

        showCommentButton.addEventListener('click', function() {
            const isHidden = commentText.style.display === 'none' || commentText.style.display === '';
            commentText.style.display = isHidden ? 'block' : 'none';
            commentInputBox.style.display = isHidden ? 'block' : 'none';
            showCommentButton.textContent = isHidden ? 'Hide all Comments' : 'View all Comments';
        });

        const likeButton = postCard.querySelector('.likeComment');

        ////////////////////////likepost//////////////

       
        likeButton.addEventListener('click', async function() {
            console.log("hell liked")
            isLiked = !isLiked;
            TotalLike += isLiked ? 1 : -1;
            likeCommentTotal.innerHTML = `<p><strong>${TotalLike}</strong> Likes</p><p class="showComment">View all <strong>18</strong> Comments</p>`;
            likeIcon.className = isLiked ? 'bx bxs-heart' : 'bx bx-heart';
            await fetch(`http://52.16.194.174:8085/kindnessKettle/like/${isLiked ? 'add' : 'delete'}?userId=${user.user.userId}&postId=${postRespone.donationPost.postId}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${jwttoken}`
                }
            });
        });
        
    });
    }

//////////////////////add comment to ui/////////////////

// Function to send comment to the server
// function sendCommentToServer(commentContent) {
//     fetch('url_to_your_comment_endpoint', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             comment_content: commentContent,
//         }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Failed to send comment to server');
//         }
//         return response.json();
//     })
//     .then(data => {
//         addCommentToUI(data);
//     })
//     .catch(error => {
//         console.error('Error sending comment:', error);
//     });
// }



// function addCommentToUI(comment) {
//     const commentContainer = document.querySelector('.commenttext');
    
//     const commentItem = document.createElement('div');
//     commentItem.classList.add('commentItem');
//     commentItem.innerHTML = `
//         <img src="${comment.UserImage || 'default_user_image_url'}" alt="User" class="commentUserImg">
//         <p class="commentUserName">${comment.UserName}:</p>
//         <p>${comment.comment_content}</p>
//     `;
    
//     commentContainer.appendChild(commentItem);
// }

// Event listener for sending comment
// document.getElementById('sendCommentBtn').addEventListener('click', function() {
//     alert("i am cll")
//     const commentInput = document.getElementById('commentId');
//     const commentContent = commentInput.value.trim();

//     if (commentContent !== '') {
//         sendCommentToServer(commentContent);
//         commentInput.value = '';
//     }
// });


    
//////////////////////////////////////////////////////////////////////////////////////////////////
    function createForm() {
        let parentElement = document.querySelector('.container');
        parentElement.innerHTML = ''; // Clear the content of the parent element
    
        let feedDiv = document.createElement('div');
        feedDiv.classList.add('feed');
    
        // Create the head div
        let headDiv = document.createElement('div');
        headDiv.classList.add('head');
        feedDiv.appendChild(headDiv);
    
        const formContainer = document.createElement('div');
        formContainer.classList.add('postDetailCard');
    
        const formHeader = document.createElement('div');
        formHeader.classList.add('postHeader');
        const formTitle = document.createElement('h2');
        formTitle.textContent = 'Donation Post Form';
        formHeader.appendChild(formTitle);
    
        const formBody = document.createElement('div');
        formBody.classList.add('postDetailForm');
    
        const formElements = [
            { type: 'select', id: 'foodTypeId', name: 'foodTypeId', labelText: 'Food Type:', options: ['Vegetarian', 'Non-Vegetarian'] },
            { type: 'input', inputType: 'text', id: 'addressLine', name: 'addressLine', labelText: 'Address Line:' },
            { type: 'input', inputType: 'text', id: 'pincode', name: 'pincode', labelText: 'Pincode:' },
            { type: 'input', inputType: 'file', id: 'foodImageUrl', name: 'foodImageUrl', labelText: 'Food Image:' },
            { type: 'input', inputType: 'datetime-local', id: 'timeAvailable', name: 'timeAvailable', labelText: 'Time Available:' }
        ];
    
        let i=1;
    
        formElements.forEach(element => {
            const formGroup = document.createElement('div');
            formGroup.classList.add('form-group');
    
            if (element.type === 'select') {
                const selectElement = document.createElement('select');
                selectElement.id = element.id;
                selectElement.name = element.name;
                selectElement.required = true;
    
                element.options.forEach(optionText => {
                    const option = document.createElement('option');
                    // option.value = optionText.toLowerCase();
                     option.value = i++;
                    option.textContent = optionText;
                    selectElement.appendChild(option);
                });
    
                const label = document.createElement('label');
                label.textContent = element.labelText;
    
                formGroup.appendChild(label);
                formGroup.appendChild(selectElement);
            } else if (element.type === 'input') {
                const inputElement = document.createElement('input');
                inputElement.type = element.inputType;
                inputElement.id = element.id;
                inputElement.name = element.name;
                inputElement.required = true;
    
                const label = document.createElement('label');
                label.textContent = element.labelText;
    
                formGroup.appendChild(label);
                formGroup.appendChild(inputElement);
    
                // if (element.id === 'pincode') {
                //     const checkPincodeBtn = document.createElement('button');
                //     checkPincodeBtn.textContent = 'Check Pincode';
                //     checkPincodeBtn.id = 'checkPincodeBtn';
                //     checkPincodeBtn.addEventListener('click', ()=>checkPincode(inputElement.value));
                //     formGroup.appendChild(checkPincodeBtn);
                // }
    
                if (element.id === 'foodImageUrl') {
                    const foodImagebtn = document.createElement('button');
                    foodImagebtn.textContent = 'Upload Image';
                    foodImagebtn.id = 'foodImageUrl';
                    foodImagebtn.addEventListener('click', () => {
                        const fileInput = document.getElementById('foodImageUrl');
                
                        const file = fileInput.files[0];
                
                        if (file) {
                            uploadImage(file); 
                        } else {
                            console.error('No file selected');
                        }
                    });
                
                    formGroup.appendChild(foodImagebtn);
                }
            }
    
            formBody.appendChild(formGroup);
        });
    
        const savePostBtn = document.createElement('button');
        savePostBtn.textContent = 'Save Post';
        savePostBtn.id = 'SavePostbtn';
        savePostBtn.addEventListener('click', () => SavePost(formElements));
    
        formContainer.appendChild(formHeader);
        formContainer.appendChild(formBody);
        formContainer.appendChild(savePostBtn);
    
        feedDiv.appendChild(formContainer);
        parentElement.appendChild(feedDiv);
    }
    

    /////////////pincode validation///////////////////////////////////
//     let pinValidate = false;
// async function checkPincode(pincode) {
 
//    console.log("pinecoe"+pincode);
 
//     const isValid = await ValidatePincode(pincode);
   
//     if (/^\d{6}$/.test(pincode) && isValid) {
//         showError(`Valid pincode`,'success' );
//         pinValidate = true;
//         return true;
       
//     } else {

//         showError(`Invalid pincode` );
//         return false;
//     }
// }


// async function ValidatePincode(pin_code) {
//     try {
//         const response = await fetch(`http://52.16.194.174:8085/checking_pin_code/${pin_code}`,
//         {   
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${jwttoken}` // Use the received token
//                 }
//             }
//         );
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         if (data.Status === "Success") {
//             console.log("Pincode is valid");
//             return true;
//         } else if (data.Status === "Error") {
//             console.error("No records found for the provided pin code");
//             return false;
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         return false;
//     }
// }



///////////////////////////////////////////////////////////////////////////

// async function SavePost(formElements) {
 
//     const formData = {};
//     let isValid = true;

//     formElements.forEach(element => {

//         const inputElement = document.getElementById(element.id);
//                 const value = inputElement.value.trim(); 
        
//                 // Check if the value is empty
//                 if (!value) {
//                     showError(`Please fill in the ${element.labelText}`);
//                     isValid = false; 
//                     return; 
//                 }
        
//                 formData[element.id] = value;
//     });
//     console.log(formData);

//             if (!isValid) {
//                 return;
//             }

//  if(checkPincode(formData.pincode) && selectedFileName){


//     fetch('http://52.16.194.174:8085/donationPosts', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${jwttoken}`
//         },
//         body: JSON.stringify({
//             "userId": userDetails.userId,
//             "foodTypeId": formData.foodTypeId,
//             "addressLine": formData.addressLine,
//             "pincode": formData.pincode,
//             "longitude": 45.678,
//             "latitude": 78.901,
//             "foodImageUrl": selectedFileName,
//             "timeAvailable": formData.timeAvailable
//         }),
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log('Post saved successfully:');
//             showError("Post saved successfully", 'success')
//             selectedFileName='';
//         }
        
//     })
//     .then(data => {
//         // console.log('Post saved successfully:', data);
//         showError("Post saved successfully", 'success');
//     })
//     .catch(error => {
//         console.error('There was a problem saving the post:', error);
//         showError("Something went wrong");
//     });

//     }else{
//         showError('Check image is uploaded or not');
//     }
// }
 ////////////////////////////////////////////////////////////////////////////



 /////////////////////////////Success/error card ////////////////////////////////////////
// function showError(message, type = 'fail') {
//     console.log("i am error")
//     const errorCard = document.getElementById('errorCard');
//     errorCard.textContent = message;
//     errorCard.classList.add('error-card', type);
//     errorCard.style.display = 'block';

//     setTimeout(() => {
//         errorCard.style.display = 'none';
//         errorCard.classList.remove('error-card', type);
//     }, 5000);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////Postlike//////////////////////////////////////////


// async function LikePost(likePicture,postId){
//     try {
//         alert("liked")
//         fetch(`http://52.16.194.174:8085/kindnessKettle/like/add?userId=${6}&postId=${postId}`,{
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${jwttoken}` // Use the received token
//             }
        
//     }).then((response)=>{
//             if(!response.ok){
             
//                 throw new Error('Network response was not ok');
//             }
//             console.log(response)
//             likePicture.src='/like.svg';
//             showAllPost()
           
//         });
 
//     } catch (error) {
//         console.log(error);
//     }
// }

///////////////////////////////////////////////////////////end post like////////////////////////////////


////////////////////////////////////comment/////////////////////////////////////

// async function CommentPost(likePicture,postid){
//     try {
//         alert("liked")
//         fetch(`http://52.16.194.174:8085/kindnessKettle/like/add?userId=${6}&postId=${post}`,{
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${jwttoken}` // Use the received token
//             }
        
//     }).then((response)=>{
//             if(!response.ok){
             
//                 throw new Error('Network response was not ok');
//             }
//             console.log(response)
//             likePicture.src='/like.svg';
//             showAllPost()
//         });
 
//     } catch (error) {
//         console.log(error);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////


let selectedFileName = '';
// function uploadImage(file) {
//     // Create a new FormData object
//     const formData = new FormData();
//     formData.append('file', file);

//     fetch('http://52.16.194.174:8085/kindnessKettle/uploadPhotoToProfiles', {
//         method: 'Post',
//         headers: {
//             'Authorization': `Bearer ${jwttoken}` 
//             },
        
//         body: formData 
//     })
//     .then(response => {
//         if (response.ok) {
//             const contentType = response.headers.get('content-type');
//             if (contentType && contentType.includes('application/json')) {
//                 return response.json(); 
//             } else {
//                 return response.text(); 
//             }
//         } else {
//             throw new Error('Failed to upload image'); 
//         }
//     })
//     .then(data => {
//         console.log('Image uploaded successfully', data);
//         showError('Image uploaded successfully', 'success');
//         selectedFileName = data;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         showError('Failed to upload image');
//     });
// }
////////////////////////////////////////////////////////////////////////////////////////

//logout

// function logout(){
//     let info = JSON.parse(localStorage.getItem('authInfo'))

//     fetch("https://oauth2.googleapis.com/revoke?token=" + info['access_token'],{
//         method:'POST',
//         headers:{
//             'content-type':'application/x-www-form-urlencoded'
//         }
//     })
//     .then((data)=>{
//         localStorage.clear();
//         location.href="http://127.0.0.1:5500/landingpage.html"
//     })
//     }