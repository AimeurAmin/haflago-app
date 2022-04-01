import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  ratingText: {
    marginBottom: 5,
    fontSize: 28,
    fontWeight: '700',
    color: '#432667',
  },
  usersVotesContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  votesText: {
    color: '#432667',
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
    marginLeft: 7,
  }
});