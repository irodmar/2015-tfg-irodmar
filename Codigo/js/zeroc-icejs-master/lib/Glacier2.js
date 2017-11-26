// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `PermissionsVerifierF.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//


// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `SSLInfo.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    
    var Ice = global.Ice || {};
    var Glacier2 = global.Glacier2 ||  {};

    /**
     * Information taken from an SSL connection used for permissions
     * verification.
     * 
     * @see PermissionsVerifier
     * 
     **/
    Glacier2.SSLInfo = Slice.defineStruct(
        function(remoteHost, remotePort, localHost, localPort, cipher, certs)
        {
            this.remoteHost = remoteHost !== undefined ? remoteHost : null;
            this.remotePort = remotePort !== undefined ? remotePort : 0;
            this.localHost = localHost !== undefined ? localHost : null;
            this.localPort = localPort !== undefined ? localPort : 0;
            this.cipher = cipher !== undefined ? cipher : null;
            this.certs = certs !== undefined ? certs : null;
        },
        true,
        function(__os)
        {
            __os.writeString(this.remoteHost);
            __os.writeInt(this.remotePort);
            __os.writeString(this.localHost);
            __os.writeInt(this.localPort);
            __os.writeString(this.cipher);
            Ice.StringSeqHelper.write(__os, this.certs);
        },
        function(__is)
        {
            this.remoteHost = __is.readString();
            this.remotePort = __is.readInt();
            this.localHost = __is.readString();
            this.localPort = __is.readInt();
            this.cipher = __is.readString();
            this.certs = Ice.StringSeqHelper.read(__is);
        },
        12, 
        false);
    global.Glacier2 = Glacier2;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));

// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `Session.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    
    var Ice = global.Ice || {};
    
    var Glacier2 = global.Glacier2 || {};

    /**
     * This exception is raised if an attempt to create a new session
     * failed.
     * 
     * @see Router#createSession
     * @see Router#createSessionFromSecureConnection
     * @see SessionManager#create
     * @see SSLSessionManager#create
     * 
     **/
    Glacier2.CannotCreateSessionException = Slice.defineUserException(
        function(reason, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.reason = reason !== undefined ? reason : null;
        },
        Ice.UserException,
        "Glacier2::CannotCreateSessionException",
        function(__os)
        {
            __os.writeString(this.reason);
        },
        function(__is)
        {
            this.reason = __is.readString();
        },
        true,
        false);

    /**
     * A client-visible session object, which is tied to the lifecycle of
     * a {@link Router}.
     * 
     * @see Router
     * @see SessionManager
     * 
     **/
    Glacier2.Session = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::Session",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.SessionPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.Session.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.Session, Glacier2.SessionPrx,
    {
        "destroy": [, , , , , , , , , , ]
    });

    /**
     * An object for managing the set of identity constraints for specific
     * parts of object identity on a
     * {@link Session}. 
     * 
     * @see Session
     * @see SessionControl
     * 
     **/
    Glacier2.StringSet = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::StringSet",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.StringSetPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.StringSet.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.StringSet, Glacier2.StringSetPrx,
    {
        "add": [, 2, 2, , , , [["Ice.StringSeqHelper"]], , , , ],
        "remove": [, 2, 2, , , , [["Ice.StringSeqHelper"]], , , , ],
        "get": [, 2, 2, , , ["Ice.StringSeqHelper"], , , , , ]
    });

    /**
     * An object for managing the set of object identity constraints on a
     * {@link Session}. 
     * 
     * @see Session
     * @see SessionControl
     * 
     **/
    Glacier2.IdentitySet = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::IdentitySet",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.IdentitySetPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.IdentitySet.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.IdentitySet, Glacier2.IdentitySetPrx,
    {
        "add": [, 2, 2, , , , [["Ice.IdentitySeqHelper"]], , , , ],
        "remove": [, 2, 2, , , , [["Ice.IdentitySeqHelper"]], , , , ],
        "get": [, 2, 2, , , ["Ice.IdentitySeqHelper"], , , , , ]
    });

    /**
     * An administrative session control object, which is tied to the
     * lifecycle of a {@link Session}.
     * 
     * @see Session
     * 
     **/
    Glacier2.SessionControl = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::SessionControl",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.SessionControlPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.SessionControl.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.SessionControl, Glacier2.SessionControlPrx,
    {
        "categories": [, , , , , ["Glacier2.StringSetPrx"], , , , , ],
        "adapterIds": [, , , , , ["Glacier2.StringSetPrx"], , , , , ],
        "identities": [, , , , , ["Glacier2.IdentitySetPrx"], , , , , ],
        "getSessionTimeout": [, 2, 2, , , [3], , , , , ],
        "destroy": [, , , , , , , , , , ]
    });

    /**
     * The session manager for username/password authenticated users that
     * is responsible for managing {@link Session} objects. New session objects
     * are created by the {@link Router} object calling on an application-provided
     * session manager. If no session manager is provided by the application,
     * no client-visible sessions are passed to the client.
     * 
     * @see Router
     * @see Session
     * 
     **/
    Glacier2.SessionManager = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::SessionManager",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.SessionManagerPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.SessionManager.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.SessionManager, Glacier2.SessionManagerPrx,
    {
        "create": [, , , , 2, ["Glacier2.SessionPrx"], [[7], ["Glacier2.SessionControlPrx"]], , 
        [
            Glacier2.CannotCreateSessionException
        ], , ]
    });

    /**
     * The session manager for SSL authenticated users that is
     * responsible for managing {@link Session} objects. New session objects are
     * created by the {@link Router} object calling on an application-provided
     * session manager. If no session manager is provided by the
     * application, no client-visible sessions are passed to the client.
     * 
     * @see Router
     * @see Session
     * 
     **/
    Glacier2.SSLSessionManager = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::SSLSessionManager",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.SSLSessionManagerPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.SSLSessionManager.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.SSLSessionManager, Glacier2.SSLSessionManagerPrx,
    {
        "create": [, , , , 2, ["Glacier2.SessionPrx"], [[Glacier2.SSLInfo], ["Glacier2.SessionControlPrx"]], , 
        [
            Glacier2.CannotCreateSessionException
        ], , ]
    });
    global.Glacier2 = Glacier2;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));

// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `RouterF.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//


// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `PermissionsVerifier.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    
    var Ice = global.Ice || {};
    
    var Glacier2 = global.Glacier2 || {};

    /**
     * This exception is raised if a client is denied the ability to create
     * a session with the router.
     * 
     * @see Router#createSession
     * @see Router#createSessionFromSecureConnection
     * 
     **/
    Glacier2.PermissionDeniedException = Slice.defineUserException(
        function(reason, _cause)
        {
            Ice.UserException.call(this, _cause);
            this.reason = reason !== undefined ? reason : null;
        },
        Ice.UserException,
        "Glacier2::PermissionDeniedException",
        function(__os)
        {
            __os.writeString(this.reason);
        },
        function(__is)
        {
            this.reason = __is.readString();
        },
        true,
        false);

    /**
     * The Glacier2 permissions verifier. This is called through the
     * process of establishing a session.
     * 
     * @see Router
     * 
     **/
    Glacier2.PermissionsVerifier = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::PermissionsVerifier",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.PermissionsVerifierPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.PermissionsVerifier.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.PermissionsVerifier, Glacier2.PermissionsVerifierPrx,
    {
        "checkPermissions": [, 2, 1, , 2, [1], [[7], [7]], [[7]], 
        [
            Glacier2.PermissionDeniedException
        ], , ]
    });

    /**
     * The SSL Glacier2 permissions verifier. This is called through the
     * process of establishing a session.
     * 
     * @see Router
     * 
     **/
    Glacier2.SSLPermissionsVerifier = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Glacier2::SSLPermissionsVerifier",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Glacier2.SSLPermissionsVerifierPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.SSLPermissionsVerifier.ice_staticId, undefined);

    Slice.defineOperations(Glacier2.SSLPermissionsVerifier, Glacier2.SSLPermissionsVerifierPrx,
    {
        "authorize": [, 2, 1, , 2, [1], [[Glacier2.SSLInfo]], [[7]], 
        [
            Glacier2.PermissionDeniedException
        ], , ]
    });
    global.Glacier2 = Glacier2;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));

// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `Router.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    
    var Ice = global.Ice || {};
    
    var Glacier2 = global.Glacier2 || {};

    /**
     * This exception is raised if a client tries to destroy a session
     * with a router, but no session exists for the client.
     * 
     * @see Router#destroySession
     * 
     **/
    Glacier2.SessionNotExistException = Slice.defineUserException(
        function(_cause)
        {
            Ice.UserException.call(this, _cause);
        },
        Ice.UserException,
        "Glacier2::SessionNotExistException",
        undefined, undefined,
        false,
        false);

    /**
     * The Glacier2 specialization of the {@link Ice.Router}
     * interface.
     * 
     **/
    Glacier2.Router = Slice.defineObject(
        undefined,
        Ice.Object,
        [
            Ice.Router
        ], 0,
        [
            "::Glacier2::Router",
            "::Ice::Object",
            "::Ice::Router"
        ],
        -1, undefined, undefined, false);

    Glacier2.RouterPrx = Slice.defineProxy(Ice.ObjectPrx, Glacier2.Router.ice_staticId, [
        Ice.RouterPrx]);

    Slice.defineOperations(Glacier2.Router, Glacier2.RouterPrx,
    {
        "getCategoryForClient": [, 2, 1, , , [7], , , , , ],
        "createSession": [, , , 1, 2, ["Glacier2.SessionPrx"], [[7], [7]], , 
        [
            Glacier2.CannotCreateSessionException,
            Glacier2.PermissionDeniedException
        ], , ],
        "createSessionFromSecureConnection": [, , , 1, 2, ["Glacier2.SessionPrx"], , , 
        [
            Glacier2.CannotCreateSessionException,
            Glacier2.PermissionDeniedException
        ], , ],
        "refreshSession": [, , , , , , , , 
        [
            Glacier2.SessionNotExistException
        ], , ],
        "destroySession": [, , , , , , , , 
        [
            Glacier2.SessionNotExistException
        ], , ],
        "getSessionTimeout": [, 2, 1, , , [4], , , , , ]
    });
    global.Glacier2 = Glacier2;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));

// **********************************************************************
//
// Copyright (c) 2003-2014 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.5.1
//
// <auto-generated>
//
// Generated from file `Metrics.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(global, r)
{
    var require = typeof(r) === "function" ? r : function(){};
    
    var Ice = global.Ice || {};
    
    var IceMX = global.IceMX || {};

    /**
     * Provides information on Glacier2 sessions.
     * 
     **/
    IceMX.SessionMetrics = Slice.defineObject(
        function(id, total, current, totalLifetime, failures, forwardedClient, forwardedServer, routingTableSize, queuedClient, queuedServer, overriddenClient, overriddenServer)
        {
            IceMX.Metrics.call(this, id, total, current, totalLifetime, failures);
            this.forwardedClient = forwardedClient !== undefined ? forwardedClient : 0;
            this.forwardedServer = forwardedServer !== undefined ? forwardedServer : 0;
            this.routingTableSize = routingTableSize !== undefined ? routingTableSize : 0;
            this.queuedClient = queuedClient !== undefined ? queuedClient : 0;
            this.queuedServer = queuedServer !== undefined ? queuedServer : 0;
            this.overriddenClient = overriddenClient !== undefined ? overriddenClient : 0;
            this.overriddenServer = overriddenServer !== undefined ? overriddenServer : 0;
        },
        IceMX.Metrics, undefined, 2,
        [
            "::Ice::Object",
            "::IceMX::Metrics",
            "::IceMX::SessionMetrics"
        ],
        -1,
        function(__os)
        {
            __os.writeInt(this.forwardedClient);
            __os.writeInt(this.forwardedServer);
            __os.writeInt(this.routingTableSize);
            __os.writeInt(this.queuedClient);
            __os.writeInt(this.queuedServer);
            __os.writeInt(this.overriddenClient);
            __os.writeInt(this.overriddenServer);
        },
        function(__is)
        {
            this.forwardedClient = __is.readInt();
            this.forwardedServer = __is.readInt();
            this.routingTableSize = __is.readInt();
            this.queuedClient = __is.readInt();
            this.queuedServer = __is.readInt();
            this.overriddenClient = __is.readInt();
            this.overriddenServer = __is.readInt();
        },
        false);

    IceMX.SessionMetricsPrx = Slice.defineProxy(IceMX.MetricsPrx, IceMX.SessionMetrics.ice_staticId, undefined);

    Slice.defineOperations(IceMX.SessionMetrics, IceMX.SessionMetricsPrx);
    global.IceMX = IceMX;
}
(typeof (global) === "undefined" ? window : global, typeof (require) === "undefined" ? undefined : require));

