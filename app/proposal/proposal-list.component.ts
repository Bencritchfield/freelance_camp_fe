import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://portfolio.bencritchfield.com', 'Ruby on Rails', 150, 120, 15, 'ben@gmail.com')
	proposalTwo: Proposal = new Proposal(20, 'xyz Company', 'http://portfolio.bencritchfield.com', 'Ruby on Rails', 150, 120, 15, 'ben@gmail.com')
	proposalThree: Proposal = new Proposal(150, 'Something Company', 'http://portfolio.bencritchfield.com', 'Ruby on Rails', 150, 120, 15, 'ben@gmail.com')	

	proposals: Proposal[] = [
		this.proposalOne, 
		this.proposalTwo, 
		this.proposalThree
	]
}