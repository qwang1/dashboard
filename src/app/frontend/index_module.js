// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Entry point module to the application. Loads and configures other modules needed
 * to bootstrap the application.
 */
import aboutModule from './about/module';
import accessControlModule from './accesscontrol/module';
import adminModule from './admin/module';
import chromeModule from './chrome/module';
import csrfTokenModule from './common/csrftoken/csrftoken_module';
import configModule from './config/module';
import configMapModule from './configmap/module';
import daemonSetModule from './daemonset/module';
import deployModule from './deploy/module';
import deploymentModule from './deployment/module';
import errorModule from './error/module';
import horizontalPodAutoscalerModule from './horizontalpodautoscaler/module';
import indexConfig from './index_config';
import routeConfig from './index_route';
import ingressModule from './ingress/module';
import jobModule from './job/module';
import logsModule from './logs/module';
import namespaceModule from './namespace/module';
import nodeModule from './node/module';
import persistentVolumeModule from './persistentvolume/module';
import persistentVolumeClaimModule from './persistentvolumeclaim/module';
import podModule from './pod/module';
import replicaSetModule from './replicaset/module';
import replicationControllerModule from './replicationcontroller/module';
import resourceQuotaModule from './resourcequota/module';
import secretModule from './secret/module';
import serviceModule from './service/module';
import servicesanddiscoveryModule from './servicesanddiscovery/module';
import statefulSetModule from './statefulset/module';
import storageModule from './storage/module';
import storageClassModule from './storageclass/module';
import thirdPartyResourceModule from './thirdpartyresource/module';
import {TitleController} from './title_controller';
import workloadsModule from './workloads/module';

export default angular
    .module(
        'kubernetesDashboard',
        [
          'ngAnimate',
          'ngAria',
          'ngMaterial',
          'ngMessages',
          'ngResource',
          'ngSanitize',
          'ui.router',
          aboutModule.name,
          chromeModule.name,
          daemonSetModule.name,
          deployModule.name,
          errorModule.name,
          jobModule.name,
          logsModule.name,
          replicationControllerModule.name,
          replicaSetModule.name,
          namespaceModule.name,
          nodeModule.name,
          deploymentModule.name,
          horizontalPodAutoscalerModule.name,
          workloadsModule.name,
          storageModule.name,
          adminModule.name,
          serviceModule.name,
          podModule.name,
          persistentVolumeModule.name,
          statefulSetModule.name,
          persistentVolumeClaimModule.name,
          resourceQuotaModule.name,
          configMapModule.name,
          secretModule.name,
          ingressModule.name,
          servicesanddiscoveryModule.name,
          configModule.name,
          csrfTokenModule.name,
          storageClassModule.name,
          thirdPartyResourceModule.name,
          accessControlModule.name,
        ])
    .config(indexConfig)
    .config(routeConfig)
    .controller('kdTitle', TitleController);
