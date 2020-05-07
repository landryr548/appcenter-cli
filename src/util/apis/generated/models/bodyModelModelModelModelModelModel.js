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
 * A request containing information for updating details of a release
 *
 */
class BodyModelModelModelModelModelModel {
  /**
   * Create a BodyModelModelModelModelModelModel.
   * @property {boolean} [enabled] Toggle this release to be enable
   * distribute/download or not.
   * @property {string} [releaseNotes] Release notes for this release.
   * @property {object} [build] Contains metadata about the build that produced
   * the release being uploaded
   * @property {string} [build.branchName] The branch name of the build
   * producing the release
   * @property {string} [build.commitHash] The commit hash of the build
   * producing the release
   * @property {string} [build.commitMessage] The commit message of the build
   * producing the release
   */
  constructor() {
  }

  /**
   * Defines the metadata of BodyModelModelModelModelModelModel
   *
   * @returns {object} metadata of BodyModelModelModelModelModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'body',
      type: {
        name: 'Composite',
        className: 'BodyModelModelModelModelModelModel',
        modelProperties: {
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          releaseNotes: {
            required: false,
            serializedName: 'release_notes',
            type: {
              name: 'String'
            }
          },
          build: {
            required: false,
            serializedName: 'build',
            type: {
              name: 'Composite',
              className: 'BodyBuild'
            }
          }
        }
      }
    };
  }
}

module.exports = BodyModelModelModelModelModelModel;