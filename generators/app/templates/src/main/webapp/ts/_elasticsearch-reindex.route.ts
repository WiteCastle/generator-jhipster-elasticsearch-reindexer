import { Route } from '@angular/router';
<%_ if (jhipsterMajorVersion > 4) { _%>
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
<%_ } else { _%>
import { UserRouteAccessService } from '../../shared';
<%_ } _%>
import { ElasticsearchReindexComponent } from './elasticsearch-reindex.component';

export const elasticsearchReindexRoute: Route = {
    path: <% if (useLazyLoading){ %>''<% }else{ %>'elasticsearch-reindex'<% } %>,
    component: ElasticsearchReindexComponent,
    data: {
        authorities: ['ROLE_ADMIN'],
        pageTitle: <% if (enableTranslation){ %>'elasticsearch.reindex.title'<% }else{ %>'Reindex Elasticsearch'<% } %>
    },
    canActivate: [UserRouteAccessService]
};
