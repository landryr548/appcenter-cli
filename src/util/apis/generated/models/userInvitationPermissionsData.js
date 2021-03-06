/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a UserInvitationPermissionsData.
 */
class UserInvitationPermissionsData {
  /**
   * Create a UserInvitationPermissionsData.
   * @property {array} permissions The permissions the user has for the app in
   * the invitation
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserInvitationPermissionsData
   *
   * @returns {object} metadata of UserInvitationPermissionsData
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'user_invitation_permissions_data',
      type: {
        name: 'Composite',
        className: 'UserInvitationPermissionsData',
        modelProperties: {
          permissions: {
            required: true,
            serializedName: 'permissions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UserInvitationPermissionsData;
