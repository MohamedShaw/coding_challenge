/* eslint-disable prettier/prettier */
import { useQuery } from '@apollo/client';
import { LOGIN } from 'apollo/mutations/auth';
import { formatError } from 'graphql';
import { InvalidPassword, LoginInput, NetworkError, User } from 'models';
import { useMemo } from 'react';
import { GET_EPISODE } from '../queries';

export const useCharacters = (page: any, name: string) => {
    const { loading, error, data, fetchMore, refetch } = useQuery(GET_EPISODE, {
        variables: {
            page: 1,
            filter: { name: name }
        },

        notifyOnNetworkStatusChange: true,
        fetchPolicy: 'cache-and-network',
    });

    const loadMore = () => {
        if (!data) return

        fetchMore({
            variables: {
                page: data.characters.info.next,
            },
            updateQuery: (prev, { fetchMoreResult }) => {

                if (!fetchMoreResult) {
                    return prev;
                }

                const data = [
                    ...prev.characters.results,
                    ...fetchMoreResult.characters.results,
                ];


                const updated = Object.assign({}, prev, {
                    characters: {
                        ...fetchMoreResult.characters,
                        results: data
                    },
                });

                console.log('Updated', updated);

                return updated;
            },
        });
    };

    const onRefresh = () => {
        refetch()
    }

    const dataError = useMemo(() => {
        let formatedError: InvalidPassword | NetworkError | undefined;
        if (error?.graphQLErrors[0]?.extensions) {
            const code = error.graphQLErrors[0].extensions.code;
            if (code == 'UNAUTHENTICATED') {
                formatedError = new InvalidPassword();
            }
        } else if (error?.networkError) {
            formatedError = new NetworkError();
        }
        return formatedError;
    }, [error]);

    return { data: data?.characters.results, loading, error: dataError, loadMore, onRefresh };
};
