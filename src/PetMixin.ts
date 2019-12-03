export const PetMixin = {
  data() {
    return {
      pets: ['ga', 'vit', 'cho', 'meo'],
    }
  },
  computed: {
    petsArr () {
      return this.pets.filter((e) => {
        return e.match(this.text);
      });
    }
  }
}