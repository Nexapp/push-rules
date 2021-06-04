interface MergeRequestAttributes {
  name: string;
}

class MergeRequest {
  name: string;

  constructor({ name }: MergeRequestAttributes) {
    this.name = name;
  }
}

export default MergeRequest;
