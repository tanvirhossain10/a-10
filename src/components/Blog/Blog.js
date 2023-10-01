import React from 'react';

const Blog = () => {
    return (
        <div>

            <div>
                <h2>
                    What is the difference between Difference between authorization and authentication
                </h2>
                <p>
                    Authentication is a process that verify user is valid or not.And Authorization is the security process that determines a user or service's level of access.</p>
                <p> Authentication verify the identity before access.Authorization is a process that tell what can user do after verify.</p>
                <p>Authorization help the user to go something private or secured place.where authentication not allowed it.</p>
                <p>Authentication always comes before authorization</p>
                <p>In the authentication process, users or persons are verified.While in this process, users or persons are validated.</p>
                <p>It is done before the authorization process.While this process is done after the authentication process</p>



            </div>
            <div>
                <h2>
                    What other services does firebase provide other than authentication
                </h2>
                <p>
                    Google Firebase is a set of cloud-based development tools that helps  developers build, deploy and scale their projects.It provides a secure and easy way for users to sign into their app. Developers can use Firebase Authentication to support email and password login, Google Sign-In, Facebook Login and more.But in not only provide the authentication support rather it provide more.such as realtime database-The Firebase Realtime Database is a cloud-hosted NoSQL database that lets organizations store and sync data in real time across all of their users' devices. This makes it easy to build apps that are always up to date, even when users are offline.</p>
                <p>
                    Cloud Messaging. Firebase Cloud Messaging (FCM) is a service that lets businesses send messages to their users' devices, even if they're not using the app. Developers can use FCM to send push notifications, update app content, and more
                </p>
                <p>
                    Crashlytics. Firebase Crashlytics is a service that helps organizations track and fix crashes in their app. Crashlytics provides detailed reports on crashes, so they can quickly identify the root cause and fix the problem.
                </p>


            </div>
        </div>
    );
};

export default Blog;