import graphene

import core.schema


class Query(links.schema.Query, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query)
